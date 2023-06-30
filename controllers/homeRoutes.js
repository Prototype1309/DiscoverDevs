const router = require('express').Router();

router.get('/', (req, res) => {
<<<<<<< HEAD
=======
  res.render('login');
});
router.get('/login', (req, res) => {
>>>>>>> 37dc5b05fcd2e152340af1f18e410e7d8b5e7a20
  res.render('login');
});

router.get('/register', (req, res) => {
  console.log('register page');
  res.render('register');
});

module.exports = router;
