const router = require('express').Router();
const DevUser = require('../models/DevUser');

router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await DevUser.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
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

    res.json({ message: 'User information updated successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
