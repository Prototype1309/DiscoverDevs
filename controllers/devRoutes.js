const router = require('express').Router();
const DevUser = require('../models/DevUser');
const Technology = require('../models/Technology');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  if (Object.keys(req.query).length > 0) {
    let techQueries;

    if (req.query.tech) {
      techQueries =
        req.query.tech.length > 1 ? req.query.tech : [req.query.tech];
      delete req.query.tech;
    }

    let yrs_experience = req.query.yrs_experience;
    delete req.query.yrs_experience;

    if (yrs_experience) {
      req.query.yrs_experience = { [Op.gt]: yrs_experience - 1 };
    }

    const listOfDevs = await DevUser.findAll({
      where: {
        ...req.query,
      },
      include: [
        {
          model: Technology,
          attributes: ['id', 'name', 'badge_link'],
        },
      ],
    });
    const devs = listOfDevs.map((dev) => dev.get({ plain: true }));

    let filteredDevs = devs;
    if (techQueries) {
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

    res.render('devs', { filteredDevs });
  } else {
    const listOfDevs = await DevUser.findAll({
      include: [
        {
          model: Technology,
          attributes: ['id', 'name', 'badge_link'],
        },
      ],
    });
    const filteredDevs = listOfDevs.map((dev) => dev.get({ plain: true }));
    console.log(filteredDevs[0].technologies);

    res.render('devs', { filteredDevs });
  }
});

router.get('/dev/:id', (req, res) => {
  res.render('devs');
});

module.exports = router;
