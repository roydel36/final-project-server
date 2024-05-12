/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl:'https://pbs.twimg.com/media/EF01w9HWoAEHF3T.jpg'
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl:'https://pbs.twimg.com/media/EF01w9HWoAEHF3T.jpg'
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl:'https://pbs.twimg.com/media/EF01w9HWoAEHF3T.jpg'
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      lastname: "Smith",
	  email: "joe@example.com", // Add email for the student
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/6/63/Survival_Arc_Android_17_%281%29.jpg/revision/latest/scale-to-width-down/609?cb=20170417164025", // Add imageUrl for the student
      gpa: 3.5 // Add GPA for the student
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
	  firstname: "Mary",
      lastname: "Johnson",
	  email: "mary@example.com", // Add email for the student
      imageUrl: "https://static.wikia.nocookie.net/dragonball/images/6/63/Survival_Arc_Android_17_%281%29.jpg/revision/latest/scale-to-width-down/609?cb=20170417164025", // Add imageUrl for the student
      gpa: 3.8 // Add GPA for the student
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;