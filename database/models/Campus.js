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
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b3c4a88-d8b8-4055-a846-73ec72fdc222/dfcqmtg-4bd891d9-e5b6-47fe-9487-e02883e121bc.jpg/v1/fill/w_894,h_894,q_70,strp/dracula_s_castle__castlevania__by_ilo275_dfcqmtg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzNiM2M0YTg4LWQ4YjgtNDA1NS1hODQ2LTczZWM3MmZkYzIyMlwvZGZjcW10Zy00YmQ4OTFkOS1lNWI2LTQ3ZmUtOTQ4Ny1lMDI4ODNlMTIxYmMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.waAEKGLFccZH7BIa0tbWiWIGFdDnmThvhK7ZfR-oP08'
  }
});

// Export the campus model
module.exports = Campus;