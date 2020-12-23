const { Showing } = require('../models');

const showingData = [
  {
    date: "monday january 18 2021",
    startTime: "7:30 PM",
    endTime: "9:45 PM",
    month: "jan",
    day: "18",
    production_id: 1,
  },
  {
    date: "thursday january 21 2021",
    startTime: "6:30 PM",
    endTime: "8:45 PM",
    month: "jan",
    day: "21",
    production_id: 1,
  },
  {
    date: "friday january 22 2021",
    startTime: "12:30 PM",
    endTime: "2:45 PM",
    month: "jan",
    day: "22",
    production_id: 1,
  },
  {
    date: "monday april 5 2021",
    startTime: "11:30 AM",
    endTime: "1:15 PM",
    month: "apr",
    day: "05",
    production_id: 2,
  },
  {
    date: "wednesday april 7 2021",
    startTime: "5:30 PM",
    endTime: "7:15 PM",
    month: "apr",
    day: "07",
    production_id: 2,
  },
  {
    date: "friday april 9 2021",
    startTime: "9:15 PM",
    endTime: "11:00 PM",
    month: "apr",
    day: "09",
    production_id: 2,
  },
  
]

const seedShowings = () => Showing.bulkCreate(showingData);

module.exports = seedShowings;