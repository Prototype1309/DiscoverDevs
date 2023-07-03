const router = require('express').Router();
const auth = require('../utils/auth')

router.get('/dev', auth, (req, res) => {
  res.render('devdash');
});

router.get('/employer', auth, (req, res) => {
  res.render('employerdash');
});

module.exports = router;
