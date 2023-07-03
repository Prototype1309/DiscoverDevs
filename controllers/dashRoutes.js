const router = require('express').Router();
const auth = require('../utils/auth')

router.get('/dev', auth, (req, res) => {
  res.render('devdash', {
    signedIn: req.session.loggedIn
  });
});

router.get('/employer', auth, (req, res) => {
  res.render('employerdash', {
    signedIn: req.session.loggedIn});
});

module.exports = router;
