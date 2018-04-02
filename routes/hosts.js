var express = require('express');
var router = express.Router();
var domain = require('../domain/domain');

/* GET users listing. */
router.get('/', async function (req, res) {
    try {
        res.json(await domain.getHosts());
    } catch (err) {
        res.json(err);
    }
});

router.get('/:id', async function (req, res) {
    try {
        res.json(await domain.findHost(req.params.id));
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;