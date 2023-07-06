const router = require('express').Router();
const { DevUser, Technology, UserTech } = require('../../models');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Get all devs
router.get('/', async (req, res) => {
  try {
    const devUsers = await DevUser.findAll({
      include: {
        model: Technology,
      },
    });

    const simpleData = devUsers.map((event) => event.get({ plain: true }));

    console.log(simpleData);
    res.status(200).json(simpleData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Logout
router.get('/logout', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.json({ message: 'Successfully logged out' });
        res.status(204).end();
      });
    } else {
      res.json({ message: "You're not logged in" });
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login authentication
router.post('/login', async (req, res) => {
  if (!validator.isEmail(req.body.email)) {
    console.log('not a valid email');
    res.status(500);
    return;
  }

  try {
    const devUserData = await DevUser.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!devUserData) {
      res
        .status(404)
        .json({ message: 'Incorrect email or password. Please try again' });
      return;
    }

    const passwordIsValid = await devUserData.checkPassword(req.body.password);

    if (passwordIsValid) {
      console.log('valid');
      req.session.loggedIn = true;
      req.session.email = req.body.email;
      res
        .status(200)
        .json({
          user: devUserData,
          message: 'Successfully logged in',
          loggedIn: req.session.loggedIn,
        });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get dev by id
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

// Create new dev
router.post('/', async (req, res) => {
  try {
    const tech = req.body.technologies;
    delete req.body.technologies;

    bcrypt.hash(req.body.password, 1, (err, hash) => {
      req.body.password = hash;
    });

    const postDev = await DevUser.create(req.body);

    console.log(postDev);

    const insertTech = tech.map((singleTech) => {
      return { developerId: postDev.id, technologyId: singleTech };
    });
    console.log(insertTech);
    const devTech = await UserTech.bulkCreate(insertTech);

    res.status(200).json(postDev);
  } catch (err) {
    console.error(err);
  }
});

// Update dev
router.put('/:id', async (req, res) => {
  try {
    const updateUser = await DevUser.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updateUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(updateUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Delete dev profile
router.delete('/api/:userType/profile', async (req, res) => {
  console.log('hello from delete');
  try {
    const delDev = await DevUser.destroy({
      where: {
        id: req.session.email,
      },
    });
    if (!delDev) {
      res.status(400).json({ message: 'Developer not found.' });
      return;
    }
    res.status(200).json({ message: 'Developer deleted.' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
