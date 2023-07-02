const router = require('express').Router();
const DevUser = requrie('../models/DevUser');

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
