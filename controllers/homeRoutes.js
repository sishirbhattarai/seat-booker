const router = require('express').Router();
const { Production, Showing, Ticket, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const productionData = await Production.findAll({
      include: [{
        model: Showing,
        include: [Ticket]
      }],
    });
    console.log("production data", productionData)
    // const production = productionData.get({ plain: true });
    

    res.render('homepage', { 
      productionData, 
      logged_in: req.session.logged_in 
    });

    // res.status(200).json(productionData)
  } catch (err) {
    res.status(500).json(err)
  }  
});

router.get('/production', async (req, res) => {
  try {
    const productionData = await Production.findAll({
      include: [{
        model: Showing,
        include: [Ticket]
      }],
    });
    console.log("production data", productionData)
    // const production = productionData.get({ plain: true });
    

    res.render('production', { 
      productionData, 
      logged_in: req.session.logged_in 
    });

    // res.status(200).json(productionData)
  } catch (err) {
    res.status(500).json(err)
  }  
});

router.get('/production/:id', withAuth, async (req, res) => {
  try {
    const productionData = await Production.findByPk(req.params.id, {
      include: [{
        model: Showing,
        include: [Ticket]
      }],
    });
    
    const production = productionData.get({ plain: true });

    console.log(production)

    res.render('showing', { 
      ...production, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/showing/:id', withAuth, async (req, res) => {
  try {
    const showingData = await Showing.findByPk(req.params.id, {
      include: [{
        model: Production,
      }],
    });
    const showing = showingData.get({ plain: true });


    const userData = await User.findOne({
      where: { id: req.session.user_id }
    });
    const user = userData.get({ plain: true });

    console.log(showing)

    res.render('seat', { 
      ...showing,
      user: user.id, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{model: Ticket,
        include: [{model: Showing, include: Production}]
      }],
    });
    
    // console.log("user data", userData);
    const user = userData.get({ plain: true });

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
      include: [{model: Ticket,
        include: [{model: Showing, include: Production}]
      }],
    }); 


    const data = await Ticket.findOne({
      where: { user_id: req.session.user_id },
      order: [ [ 'createdAt', 'DESC' ]],
    });

    const user = userData.get({ plain: true })

    res.render('cart', {
      ...user,
      createdAt: data.createdAt,
      logged_in: true,
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/checkout', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ["password"]
      },
      include: [{model: Ticket,
        include: [{model: Showing, include: Production}]
      }],
    }); 

    const data = await Ticket.findOne({
      where: { user_id: req.session.user_id },
      order: [ [ 'createdAt', 'DESC' ]],
    });

    const user = userData.get({ plain: true })

    res.render('checkout', {
      ...user,
      createdAt: data.createdAt,
      logged_in: true,
    })
  } catch (err) {
    res.status(500).json(err)
  }
});



router.get('/test', async (req, res) => {
  try {
    const data = await Ticket.findOne({
    where: { user_id: req.session.user_id },
    order: [ [ 'createdAt', 'DESC' ]],
    });
    res.json(data.createdAt)
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
