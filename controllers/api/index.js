const router = require('express').Router();
<<<<<<< HEAD
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
=======
const devApiRoute = require('./devUser');
const empApiRoute = require('./employerUser');
const techApiRoute = require('./technology');

router.use('/devUser', devApiRoute);
router.use('/employerUser', empApiRoute);
router.use('/technology', techApiRoute);
>>>>>>> 37dc5b05fcd2e152340af1f18e410e7d8b5e7a20

module.exports = router;
