const router = require('express').Router();
const { Production, Showing, Seat, Ticket } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const productionData = await Production.findAll({
      include: [{
        model: Showing,
        include: [Seat, Ticket]
      }]
    })
    console.log("Production Daeta", productionData)
    res.status(200).json(productionData)
  } catch (err) {
    res.status(500).json(err)
  }  
});

module.exports = router;
