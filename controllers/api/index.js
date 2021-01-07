const router = require('express').Router();
const userRoutes = require('./userRoutes');
const showingRoutes = require('./showingRoutes');
const ticketRoutes = require('./ticketRoutes');
const productionRoutes = require('./productionRoutes');

router.use('/user', userRoutes);
router.use('/showing', showingRoutes);
router.use('/ticket', ticketRoutes);
router.use('/production', productionRoutes);

module.exports = router;