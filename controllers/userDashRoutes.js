const router = require('express').Router();
const DevUser = require('../models/DevUser');
const auth = require('../utils/auth');

router.get('/:id', auth, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await DevUser.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.render('userProfile', { user, signedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    const user = await DevUser.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (updatedData.yearsOfExperience) {
      user.yearsOfExperience = updatedData.yearsOfExperience;
    }

    if (updatedData.technology) {
      user.technology = updatedData.technology;
    }

    if (updatedData.contactInfo) {
      user.contactInfo = updatedData.contactInfo;
    }

    if (updatedData.location) {
      user.location = updatedData.location;
    }

    await user.save();

    res.render('userProfile', { user, signedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
