const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bycrypt');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// creates fields/columns for the User model
User.init(
  {
    id: {

    },
    username: {

    },
      email: {

    },
    password: {

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
