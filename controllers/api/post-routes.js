const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post, Comment, Vote } = require('../../models');

// Get all user post
router.get('/', (req, res) => {
Post.findAll({
  attributes: [
    'id',
    'post_url',
    'title',
    'created_at',
    [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
  ],
  include: [
    {
      model: Comment,
      attributes: ['id', 'content_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
      }
    },
    {
      model: User,
      attributes: ['username']
    }
  ]
})
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});