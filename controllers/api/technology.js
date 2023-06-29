const router = require('express').Router();
const { DevUser, Technology } = require('../../models');

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

router.get('/:id', async (req, res) => {
  try {
    const getTech = await Technology.findByPk(req.params.id, {
    include: ({ model: DevUser }),
    });
    if (!getTech) {
      res.status(400).json({ message: 'Technology not found.' });
      return;
    }
    res.json(getTech);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const singleTechnology = await Technology.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: 'Technology has been removed.' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
