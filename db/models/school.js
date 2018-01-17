'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const School = db.define('schools', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: { // public/private
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = School;
