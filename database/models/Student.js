/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  imageurl: {
    type: Sequelize.TEXT('long'),
    defaultValue: ""
  },
  
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0
    } 
  },
  
  campusId: {
    type: Sequelize.INTEGER,
  }
});

// Export the student model
module.exports = Student;