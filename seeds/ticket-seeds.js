const { Ticket } = require('../models');

const ticketData = [
  {
    user_id: 1,
    showing_id: 1,
    seat_id: 1,
    in_cart: false,
    purchased: true,
  },
  {
    user_id: 1,
    showing_id: 4,
    seat_id: 2,
    in_cart: true,
    purchased: false,
  },
  {
    user_id: 2,
    showing_id: 2,
    seat_id: 3,
    in_cart: false,
    purchased: true,
  }

]

const seedTickets = () => Ticket.bulkCreate(ticketData);

module.exports = seedTickets;