const { Production } = require('../models');

const productionData = [
  {
    title: "Les Miserables",
    description: "A bunch of french people die.",
    img: "https://resizing.flixster.com/gprzGHTZlso8Y5gFWeybH6smEPk=/206x305/v2/https://flxt.tmsimg.com/assets/p9088263_p_v10_ag.jpg",
    genre: "musical",
    startDate: "January 1",
    endDate: "March 1",
  },
  {
    title: "The Lion King",
    description: "Lions fight each other and stuff.",
    img: "https://resizing.flixster.com/37nvjsHybtXd0q_Ae144Eu4itMQ=/206x305/v2/https://resizing.flixster.com/tjFCnGQsGs0O1F5HPx9vaVyWzho=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzYyYWU2MmIwLTE3NDMtNDJlZi04MzQ1LTViNjVjMzA3YTlkMi53ZWJw",
    genre: "musical",
    startDate: "April 1",
    endDate: "June 1",
  },
  
]

const seedProductions = () => Production.bulkCreate(productionData);

module.exports = seedProductions;