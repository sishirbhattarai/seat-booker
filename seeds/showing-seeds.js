const { Showing } = require('../models');

const showingData = [
  {
    time: "2021-01-01 19:30:00",
    production_id: 1,
  },
  {
    time: "2021-01-08 17:30:00",
    production_id: 1,
  },
  {
    time: "2021-01-015 18:00:00",
    production_id: 1,
  },
  {
    time: "2021-04-10 13:30:00",
    production_id: 2,
  },
  {
    time: "2021-04-15 11:30:00",
    production_id: 2,
  },
  {
    time: "2021-04-25 15:45:00",
    production_id: 2,
  },
  
]

const seedShowings = () => Showing.bulkCreate(showingData);

module.exports = seedShowings;