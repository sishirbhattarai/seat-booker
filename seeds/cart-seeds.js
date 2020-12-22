const { Cart } = require('../models');

const cartData = [
  {
    ticket_id: 1,
  },
  {
    ticket_id: 2,
  }
]

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;