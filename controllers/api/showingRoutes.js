const router = require("express").Router();
const { response } = require("express");
const { User, Ticket, Seat, Showing, Production } = require("../../models");
// const withAuth = require('../../utils/auth')

router.get("/", async (req, res) => {
  try {
    const showingData = await Showing.findAll({
      include: [
        {
          model: Seat,
        },
        { 
          model: Ticket
         },
      ],
    });
    res.status(200).json(showingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const showingData = await Showing.findByPk(req.params.id, {
        include: [
            {
              model: Seat,
            },
            { 
              model: Ticket
             },
          ],
        });
    res.status(200).json(showingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
