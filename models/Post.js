const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// create columns for Post model
Post.init(
  {
    id: {

    },
    title: {

    },
    post_url: {

    },
    user_id: {

    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;
