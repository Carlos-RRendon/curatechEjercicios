var router = require('express').Router();

router.get('/', (req,res) =>{
    res.send('Server online')
});

router.use('/string', require('./invertString/string.routes'));

module.exports = router;