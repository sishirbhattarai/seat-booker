const { User } = require('../models');

const userData = [
  {
    name: "John",
    email: "john@domain.com",
    password: "password1234",
  },
  {
    name: "Susan",
    email: "susan@domain.com",
    password: "password1234",
  },
  
]

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;