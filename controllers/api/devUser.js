const router = require('express').Router();
const { DevUser, Technology } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const devUsers = await DevUser.findAll({
            include: {
                model: Technology
            }
        })

        const simpleData = devUsers.map((event) => event.get({ plain: true }))

        console.log(simpleData)
        res.status(200).json(simpleData)

    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})


module.exports = router;
