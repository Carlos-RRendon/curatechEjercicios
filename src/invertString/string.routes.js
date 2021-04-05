const router = require('express').Router();

const {
    invertString
} = require ('../invertString/string.controllers')

router.get('/', invertString)

module.exports = router;