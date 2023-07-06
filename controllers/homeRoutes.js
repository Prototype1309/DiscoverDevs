const router = require('express').Router();
const Technology = require('../models/Technology');
const DevUser = require('../models/DevUser')

router.get('/', (req, res) => {
  res.render('home', {
    signedIn: req.session.loggedIn,
  });
});
router.get('/home', (req, res) => {
  res.render('home', {
    signedIn: req.session.loggedIn,
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    signedIn: req.session.loggedIn,
  });
});

router.get('/register', async (req, res) => {
  const listOfTechs = await Technology.findAll({});
  const techs = listOfTechs.map((tech) => tech.get({ plain: true }));

  res.render('register', {
    techs,
    signedIn: req.session.loggedIn,
  });
});

router.get('/employer', (req, res) => {
  res.render('employer', {
    signedIn: req.session.loggedIn,
  });
});

router.get('/profile', async (req, res) => {
  
  console.log(req.session.email)

  let devUserData = await DevUser.findOne({
    where: {
      email: req.session.email,
    },
    include: [
      {
        model: Technology,
        attributes: ['id', 'name', 'badge_element'],
      },
    ],
  }); 

  const devData = devUserData.get({plain: true})


  // console.log(devUserData)
  console.log(devData)

  res.render('profile', {
    devData,
    signedIn: req.session.loggedIn,
  });
});

module.exports = router;
