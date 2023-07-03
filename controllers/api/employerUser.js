const router = require('express').Router();
const EmployerUser = require('../../models/EmployerUser');

router.get('/', async (req, res) => {
  try {
    const employerUser = await EmployerUser.findAll({});
    res.status(200).json(employerUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getEmployer = await EmployerUser.findByPk(req.params.id);
    if (!getEmployer) {
      res.status(400).json({ message: 'Employer not found.' });
      return;
    }
    res.json(getEmployer);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const postEmployer = await EmployerUser.create(req.body);
    res.status(200).json(postEmployer);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const delEmpoyer = await EmployerUser.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!delEmpoyer) {
      res.status(400).json({ message: 'Employer not found.' });
      return;
    }
    res.json({ message: 'Employer deleted.' });
  } catch (error) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
