var express = require('express');
const creation = require('../controlle/control');
var router = express.Router();


/* GET users listing. */
router.post('/', creation.ajoutTable)
module.exports = router;
