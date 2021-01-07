const router = require("express").Router();
const { response } = require("express");

const { User, Ticket, Showing, Production } = require("../../models");
// const withAuth = require('../../utils/auth')

router.get("/", async (req, res) => {
  try {
    const ticketData = await Ticket.findAll({
        include: [{
            model: Showing,
            include: Production
        }]
        });
    res.status(200).json(ticketData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ticketData = await Ticket.findByPk(req.params.id, {
        include: [{
            model: Showing,
            include: Production
        }]
        });
    res.status(200).json(ticketData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  try {
      const ticketData = await Ticket.create(req.body);

      // req.session.save(() => {
      //     req.session.ticket_id = ticketData.id;
      //     req.session.logged_in = true;

          res.status(200).json(ticketData);
      // })
  } catch (err) {
      res.status(500).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{model: Ticket,
      }],
    });

      const ticketData = await Ticket.update({
        in_cart: false,
        purchased: true
      }, {
        where: {user_id: userData.id},
        returning: true,
        plain: true
      })
          res.status(200).json(ticketData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;