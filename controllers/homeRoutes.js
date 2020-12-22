const router = require('express').Router();
const { Production, Showing, Seat, Ticket, User, Cart } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const productionData = await Production.findAll({
      include: [{
        model: Showing,
        include: [Seat, Ticket]
      }]
    })
    res.status(200).json(productionData)
  } catch (err) {
    res.status(500).json(err)
  }  
});

router.get('/production/:id', async (req, res) => {
  try {
    const productionData = await Production.findByPk(req.params.id, {
      include: [{
        model: Showing,
        include: [Seat, Ticket]
      }]
    })
    res.status(200).json(productionData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ["password"]
      },
      include: [{
        model: Ticket
      }],
    }) 
    res.render('profile', {
      ...user,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/cart', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ["password"]
      },
      include: [{
        model: Cart,
        include: Ticket,
        include: [Seat, {model: Showing, include: Production}]
    }],
    }) 
    res.render('cart', {
      ...user,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/cart', async (req, res) => {
  try {
    const newCartItem = await Cart.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCartItem);
  } catch (err) {
    res.status(400).json(err);
  }
})

router.delete('/cart/:id', async (req, res) => {
  try {
    const cartData = await Cart.delete({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!cartData) {
      res.status(404).json({ message: 'No cart item with that id'});
      return;
    }
    res.status(200).json(cartData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  } 
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  } 
  res.render('signup');
});

module.exports = router;
