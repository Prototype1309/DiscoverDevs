const router = require('express').Router();
const DevUser = require('../../models/DevUser');

router.get('/', async (req, res) => {
  try {
    const devUser = await DevUser.findAll({});
    res.status(200).json(devUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
