const router = require('express').Router();
const userRoutes = require('./userRoutes');
const showingRoutes = require('./showingRoutes');
const seatRoutes = require('./seatRoutes');
const productionRoutes = require('./productionRoutes');

router.use('/user', userRoutes);
router.use('/showing', showingRoutes);
router.use('/seat', seatRoutes);
router.use('/production', productionRoutes);

module.exports = router;