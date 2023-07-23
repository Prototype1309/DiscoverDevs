const router = require('express').Router();
const EmployerUser = require('../../models/EmployerUser');
const validator = require('validator')

router.get('/', async (req, res) => {
  try {
    const employerUser = await EmployerUser.findAll({});
    res.status(200).json(employerUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const postEmployer = await EmployerUser.create(req.body);
      req.session.loggedIn = true;
      req.session.email = req.body.email;
      res.status(200).json({
        user: postEmployer,
        message: 'Successfully registered',
        loggedIn: req.session.loggedIn,
      });
  } catch (err) {
    console.error(err);
  }
});

// Login
router.post('/login', async (req, res) => {

  if (!validator.isEmail(req.body.email)) {
    console.log("not a valid email")
    res.status(500)
    return
  }

  try {

    const empUserData = await EmployerUser.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!empUserData) {
      res.status(404).json({message: 'Incorrect email or password. Please try again'})
      return
    }

    const passwordIsValid = await empUserData.checkPassword(req.body.password)

    if (passwordIsValid) {
      console.log('valid')
      req.session.loggedIn = true;
      req.session.email = req.body.email
      res.status(200).json({user: empUserData, message: "Successfully logged in", loggedIn: req.session.loggedIn})
    }

  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
})

// Logout
router.get('/logout', async (req, res) => {
  console.log(req.session)
  try {
      if (req.session.loggedIn) {
          req.session.destroy(() => {
              res.json({message: 'Successfully logged out'})
              res.status(204).end()
          })
      } else {
          res.json({message: 'You\'re not logged in'})
          res.status(404).end()
      }
  } catch (err) {
      console.log(err)
      res.status(500).json(err)
  }
})

router.delete('/profile', async (req, res) => {
  const email = req.query.email;

  try {
    const deletedUser = await EmployerUser.destroy({
      where: { email: req.session.email },
    });

    if (deletedUser) {

      if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.json({message: 'Successfully logged out'})
            res.status(204).end()
        })
     } else {
      res.status(200).json({ message: 'Profile deleted successfully' });
     }

    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;
