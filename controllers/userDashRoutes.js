const express = require('express');
const router = express.Router();
const devdash = require('./dashRoutes');

router.use(express.urlencoded({ extended: true }));

router.get('/dev/:id', async (req, res) => {
  const devId = req.params.id;
  try {
    const dev = await devdash.findByPk(devId, {
      raw: true,
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

    res.render('devs', { devData: dev });
  } catch (error) {
    res.status(500).render('error', { error: 'Internal server error.' });
  }
});

router.post('/dev/:id', async (req, res) => {
  const devId = req.params.id;

  try {
    const dev = await devdash.findByPk(devId, { raw: true });

    if (!dev) {
      return res
        .status(404)
        .render('error', { error: 'User profile not found' });
    }

    dev.first_name = req.body.first_name;
    dev.last_name = req.body.last_name;
    dev.email = req.body.email;
    // Update other properties as needed

    await DevUser.update(dev, {
      where: { id: devId },
    });

    res.redirect(`/devs/dev/${devId}`);
  } catch (error) {
    res.status(500).render('error', { error: 'Internal Server Error' });
  }
});

module.exports = router