const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  console.log('register page');
  res.render('register');
});

module.exports = router;
