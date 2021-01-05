const router = require("express").Router();
const { response } = require("express");
const { User, Ticket, Seat, Showing, Production } = require("../../models");
// const withAuth = require('../../utils/auth')

router.get("/", async (req, res) => {
  try {
    const seatData = await Seat.findAll({
        include: [{
            model: Showing,
            include: Production
        }]
        });
    res.status(200).json(seatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const seatData = await Seat.findByPk(req.params.id, {
        include: [{
            model: Showing,
            include: Production
        }]
        });
    res.status(200).json(seatData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
      const seatData = await Seat.create(req.body);

      // req.session.save(() => {
      //     req.session.seat_id = seatData.id;
      //     req.session.logged_in = true;

          res.status(200).json(seatData);
      // })
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;