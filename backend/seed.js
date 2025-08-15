// /backend/seed.js

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const connectDB = require('./db');
const { Role } = require('./models');

// The roles we need in our application
const rolesToSeed = [
  { role_name: 'Family' },
  { role_name: 'NGO' },
  { role_name: 'Police' },
];

const seedRoles = async () => {
  try {
    // 1. Connect to the database
    await connectDB();
    console.log('Database connected for seeding...');

    // 2. Check if roles already exist
    const existingRolesCount = await Role.countDocuments();
    if (existingRolesCount > 0) {
      console.log('Roles collection is not empty. Seeding is not required.');
      process.exit(0);
    }
    
    // 3. If roles do not exist, insert them
    console.log('Seeding roles...');
    await Role.insertMany(rolesToSeed);
    console.log('Roles have been successfully seeded!');

    process.exit(0);

  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
};

seedRoles();