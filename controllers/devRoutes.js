const router = require('express').Router();
const DevUser = require('../models/DevUser');
const Technology = require('../models/Technology');
const auth = require('../utils/auth');
const { Op } = require('sequelize');

router.get('/', auth, async (req, res) => {
  if (Object.keys(req.query).length > 0) {
    let techQueries;

    if (req.query.tech) {
      console.log(typeof req.query.tech.length);
      techQueries =
        typeof req.query.tech != 'string' ? req.query.tech : [req.query.tech];
      delete req.query.tech;
    }

    let yrs_experience = req.query.yrs_experience;
    delete req.query.yrs_experience;

    if (yrs_experience) {
      1;
      req.query.yrs_experience = { [Op.gt]: yrs_experience - 1 };
    }

    const listOfDevs = await DevUser.findAll({
      where: {
        ...req.query,
      },
      include: [
        {
          model: Technology,
          attributes: ['id', 'name', 'badge_element'],
        },
      ],
    });
    const devs = listOfDevs.map((dev) => dev.get({ plain: true }));

    let filteredDevs = devs;
    if (techQueries) {
      console.log(techQueries);

      filteredDevs = [];
      devs.forEach((dev) => {
        let i = 0;
        let techs = dev.technologies;
        let modTechs = techs.map((tech) => tech.id).sort();

        techQueries.forEach((technology) => {
          if (modTechs.includes(Number(technology))) {
            i++;
          }
        });

        if (i == techQueries.length) {
          filteredDevs.push(dev);
        }
      });
    }

    const listOfTechs = await Technology.findAll({});
    const renderTechs = listOfTechs.map((t) => t.get({ plain: true }));

    res.render('devs', {
      filteredDevs,
      signedIn: req.session.loggedIn,
      renderTechs,
    });
  } else {
    const listOfDevs = await DevUser.findAll({
      include: [
        {
          model: Technology,
          attributes: ['id', 'name', 'badge_element'],
        },
      ],
    });
    const filteredDevs = listOfDevs.map((dev) => dev.get({ plain: true }));
    console.log(filteredDevs[0].technologies);

    const listOfTechs = await Technology.findAll({});
    const renderTechs = listOfTechs.map((t) => t.get({ plain: true }));

    res.render('devs', {
      filteredDevs,
      signedIn: req.session.loggedIn,
      renderTechs,
    });
  }
});

router.get('/dev/:id', auth, (req, res) => {
  res.render('devs', {
    signedIn: req.session.loggedIn,
  });
});

module.exports = router;
