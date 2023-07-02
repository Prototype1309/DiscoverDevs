const router = require('express').Router();
const Technology = require('../models/Technology')

router.get('/', (req, res) => {
  res.render('home');
});
router.get('/home', (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', async (req, res) => {
  
  const listOfTechs = await Technology.findAll({})
  const techs = listOfTechs.map((tech) =>
    tech.get({plain: true})
  )

  res.render('register', {techs});
});
router.get('/employer', (req, res) => {
  res.render('employer');
});


module.exports = router;
