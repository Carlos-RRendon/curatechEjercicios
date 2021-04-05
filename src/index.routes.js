var router = require('express').Router();


router.use('/string', require('./invertString/string.routes'));

module.exports = router;