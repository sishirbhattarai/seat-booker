const { Seat } = require('../models');

const seatData = [
  {
    row: "A",
    number: 5,
    price: 60.45,
    showing_id: 1,
    available: false,
  },
  {
    row: "A",
    number: 5,
    price: 60.45,
    showing_id: 2,
    available: false,
  },
  {
    row: "B",
    number: 4,
    price: 50.45,
    showing_id: 1,
    available: false,
  },
  {
    row: "C",
    number: 3,
    price: 40.45,
    showing_id: 2,
    available: false,
  },
  {
    row: "D",
    number: 2,
    price: 30.45,
    showing_id: 3,
    available: false,
  },
  {
    row: "E",
    number: 1,
    price: 20.45,
    showing_id: 4,
    available: false,
  },
  {
    row: "F",
    number: 7,
    price: 10.45,
    showing_id: 4,
    available: false,
  },
  {
    row: "G",
    number: 9,
    price: 100.45,
    showing_id: 4,
    available: false,
  },
  
]

const seedSeats = () => Seat.bulkCreate(seatData);

module.exports = seedSeats;