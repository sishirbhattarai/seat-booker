const { Showing } = require('../models');

const showingData = [
  {
    date: "monday january 18 2021",
    time: "7:30 PM",
    month: "jan",
    day: "18",
    production_id: 1,
  },
  {
    date: "thursday january 21 2021",
    time: "6:30 PM",
    month: "jan",
    day: "21",
    production_id: 1,
  },
  {
    date: "friday january 22 2021",
    time: "12:30 PM",
    month: "jan",
    day: "22",
    production_id: 1,
  },
  {
    date: "monday april 5 2021",
    time: "11:30 AM",
    month: "apr",
    day: "05",
    production_id: 2,
  },
  {
    date: "wednesday april 7 2021",
    time: "5:30 PM",
    month: "apr",
    day: "07",
    production_id: 2,
  },
  {
    date: "friday april 9 2021",
    time: "9:15 PM",
    month: "apr",
    day: "09",
    production_id: 2,
  },
  
]

const seedShowings = () => Showing.bulkCreate(showingData);

module.exports = seedShowings;