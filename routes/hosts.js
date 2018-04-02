var express = require('express');
var router = express.Router();
var domain = require('../domain/domain');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await domain.getHosts());
    } catch (err) {
        res.json(err);
    }    
});

module.exports = router;