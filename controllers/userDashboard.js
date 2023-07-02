const express = require('express');
const router = express.Router();
const DevUser = require('./models/DevUser');
const Technology = require('./models/Technology');

router.use(express.urlencoded({ extended: true }));

router.get('/dev/:id', async (req, res) => {
  const devId = req.params.id;
  try {
    const dev = await DevUser.findByPk(devId, {
      include: [
        {
          model: Technology,
          attributes: ['id', 'name', 'badge_link'],
        },
      ],
    });
    if (!dev) {
      return res
        .status(404)
        .render('error', { error: 'User profile not found.' });
    }

    const devData = dev.get({ plain: true });
    res.render('devs', { devData });
  } catch (error) {
    res.status(500).render('error', { error: 'Internal server error.' });
  }
});

router.post('/dev/:id', async (req, res) => {
  const devId = req.params.id;

  try {
    const dev = await DevUser.findByPk(devId);

    if (!dev) {
      return res
        .status(404)
        .render('error', { error: 'User profile not found' });
    }

    dev.name = req.body.name;
    dev.email = req.body.email;
    // Update other properties as needed

    await dev.save();

    res.redirect(`/devs/dev/${devId}`);
  } catch (error) {
    res.status(500).render('error', { error: 'Internal Server Error' });
  }
});

module.exports = router;
