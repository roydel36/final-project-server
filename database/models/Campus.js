/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"


// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },
  imageurl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://static.wikia.nocookie.net/spongebob/images/5/58/Kamp-Koral-Patrick.png/revision/latest/scale-to-width/360?cb=20220724103202'
  }
});

// Export the campus model
module.exports = Campus;