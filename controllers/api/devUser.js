const router = require('express').Router();
const { DevUser, Technology} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const devUser = await DevUser.findAll({});
    res.status(200).json(devUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//Do we need to add a way to get user by tech_id here?
router.get('/:id', async (req, res) => {
  try {
    const getDev = await DevUser.findByPk(req.params.id, {
      include: { model: Technology },
    });
    if (!getDev) {
      res.status(400).json({ message: 'Developer not found.' });
      return;
    }
    res.json(getDev);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const postDev = await DevUser.create(req.body);
    res.status(200).json(postDev);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id'),
  async (req, res) => {
    try {
      const delDev = await DevUser.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!delDev) {
        res.status(400).json({ message: 'Developer not found.' });
        return;
      }
      res.json({ message: 'Developer deleted.' });
    } catch (error) {
      console.error(err);
      res.status(500).json(err);
    }
  };

module.exports = router;
