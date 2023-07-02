const router = require('express').Router();

router.get('/dev', (req, res) => {
  res.render('devdash');
});

router.get('/employer', (req, res) => {
  res.render('employerdash');
});

module.exports = router;
