const seedUsers = require('./user-seeds');
const seedProductions = require('./production-seeds');
const seedShowings = require('./showing-seeds');
const seedSeats = require('./seat-seeds');
const seedTickets = require('./ticket-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
 
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  
  await seedProductions();
  console.log('\n----- PRODUCTIONS SEEDED -----\n');

  await seedShowings();
  console.log('\n----- SHOWINGS SEEDED -----\n');

  await seedSeats();
  console.log('\n----- SEATS SEEDED -----\n');

  await seedTickets();
  console.log('\n----- TICKETS SEEDED -----\n');

  process.exit(0);
};

seedAll();
