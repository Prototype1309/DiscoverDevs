const router = require('express').Router();
const devApiRoute = require('./devUser');
const empApiRoute = require('./employerUser');
const techApiRoute = require('./technology');

router.use('/devUser', devApiRoute);
router.use('/employerUser', empApiRoute);
router.use('/technology', techApiRoute);

module.exports = router;
