const router = require('express').Router();
const { response } = require('express');
const {User, Ticket, Showing, Production} = require('../../models');
// const withAuth = require('../../utils/auth')

router.get('/', async (req, res) => {
    try {
      const productionData = await Production.findAll({
        include: [{
          model: Showing,
          include: [Ticket]
        }],
      });
  
      res.status(200).json(productionData)
    } catch (err) {
      res.status(500).json(err)
    }  
  });
  
router.get('/:id', async (req, res) => {
  try {
    const productionData = await Production.findByPk(req.params.id, {
      include: [{
        model: Showing,
        include: [Ticket]
      }],
    });
    res.status(200).json(productionData)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;

