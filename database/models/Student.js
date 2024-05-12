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
  //added below
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://practicaltyping.com/wp-content/uploads/2021/10/android17.jpg' // Default value for imageUrl
  },
  gpa: {
    type: Sequelize.DECIMAL(3, 1), 
    allowNull: true, 
    validate: {
      min: 0.0,
      max: 4.0 
    }
  },
});


// Export the student model
module.exports = Student;