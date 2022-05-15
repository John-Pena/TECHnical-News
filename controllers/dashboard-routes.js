const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// Gets the main page for user when logged in
router.get('/', (req, res) => {
  res.render('dashboard', {loggedIn: true });
});

module.exports = router;
