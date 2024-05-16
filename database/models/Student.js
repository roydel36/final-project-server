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
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageurl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  //MIN specifiied to 4, max specified to 4
  gpa: {
    type: Sequelize.DECIMAL(3,1), 
    allowNull:true,
    validate: {
      min: 0.0,
      max: 4.0 
    }
  },
  //will be used to relate students and campuses
  campusId: {
    type: Sequelize.INTEGER,
    allowNull:true
  }
});


// Export the student model
module.exports = Student;