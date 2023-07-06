const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const devRoutes = require('./devRoutes');
const dashRoutes = require('./dashRoutes');
const profileRoutes = require('./userDashRoutes');

router.use('/', homeRoutes);
router.use('/devs', devRoutes);
router.use('/dashboard', dashRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
