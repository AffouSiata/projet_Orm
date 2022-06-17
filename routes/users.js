var express = require('express');
const { route } = require('.');
const creation = require('../controlle/control');
var router = express.Router();


/* GET users listing. */
router.post('/', creation.ajoutTable)
router.get('/', creation.affiche)
router.put('/:id', creation.modifier)
router.delete('/:id', creation.supprime)
module.exports = router;
