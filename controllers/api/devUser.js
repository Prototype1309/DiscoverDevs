const router = require('express').Router();
const { DevUser, Technology, UserTech } = require('../../models');

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

router.post('/', async (req, res) => {
  try {
    const tech = req.body.technologies;
    delete req.body.technologies;
    const postDev = await DevUser.create(req.body);

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


router.put('/:id', async (req,res) => {
    try {

        const updateUser = await DevUser.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        if (!updateUser) {
            res.status(404).json({message: "User not found"})
            return
        }

        res.status(200).json(updateUser)

    } catch (err) {
        console.error(err)
        res.status(500).json(err);
    }
})


router.delete('/:id', async (req, res) => {
    console.log("hello from delete")
    try {
      const delDev = await DevUser.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!delDev) {
        res.status(400).json({ message: 'Developer not found.' });
        return;
      }
      res.status(200).json({ message: 'Developer deleted.' });
    } catch (error) {
      console.error(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
