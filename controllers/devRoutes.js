const router = require('express').Router();

router.get('/', (req, res) => {
    const params = req.query.tech
    console.log('\n'+params+'\n')
  res.render('devs');
});


router.get('/dev/:id', (req, res) => {


  res.render('devs');
});



module.exports = router;
