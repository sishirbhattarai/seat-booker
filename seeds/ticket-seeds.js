const { Ticket } = require('../models');

const ticketData = [
  {
    chair_num: 1,
    row: "A",
    number: 1,
    price: 70.00,
    showing_id: 1,
    user_id: 1,
    in_cart: false,
    purchased: true,
  },
  {
    chair_num: 2,
    row: "A",
    number: 2,
    price: 70.00,
    showing_id: 1,
    user_id: 1,
    in_cart: true,
    purchased: false,
  },
  {
    chair_num: 11,
    row: "B",
    number: 3,
    price: 65.00,
    showing_id: 1,
    user_id: 1,
    in_cart: true,
    purchased: false,
  },
  {
    chair_num: 15,
    row: "B",
    number: 7,
    price: 40.45,
    showing_id: 1,
    user_id: 1,
    in_cart: true,
    purchased: false,
  },
  {
    chair_num:40,
    row: "E",
    number: 8,
    price: 50.00,
    showing_id: 2,
    user_id: 1,
    in_cart: false,
    purchased: true,
  },
  {
    chair_num: 41,
    row: "F",
    number: 1,
    price: 45.00,
    showing_id: 2,
    user_id: 2,
    in_cart: true,
    purchased: false,
  },
  {
    chair_num: 42,
    row: "F",
    number: 2,
    price: 45.00,
    showing_id: 2,
    user_id: 2,
    in_cart: true,
    purchased: false,
  },
  {
    chair_num: 19,
    row: "C",
    number: 3,
    price: 60.00,
    showing_id: 2,
    user_id: 2,
    in_cart: true,
    purchased: false,
  },
  
]

const seedTickets = () => Ticket.bulkCreate(ticketData);

module.exports = seedTickets;