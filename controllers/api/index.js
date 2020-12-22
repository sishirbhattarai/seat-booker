const router = require('express').Router();
const userRoutes = require('./userRoutes');
const showingRoutes = require('./showingRoutes');
const seatRoutes = require('./seatRoutes');

router.use('/user', userRoutes);
router.use('/showing', showingRoutes);
router.use('/seat', seatRoutes);

module.exports = router;