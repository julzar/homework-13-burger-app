const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

const burger = sequelize.define('burger', {
  name: {
    type: Sequelize.STRING,
    required: true
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    required: true
  }
}, 
{
  freezeTableName: true
});

burger.sync();

module.exports = burger;
