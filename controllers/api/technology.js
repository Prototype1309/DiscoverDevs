const router = require('express').Router();
const Technology = require('../../models/Technology');

router.get('/', async (req, res) => {
  console.log(req);
  try {
    const technology = await Technology.findAll({});
    res.status(200).json(technology);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
