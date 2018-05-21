var express = require('express');
var router = express.Router();
var domain = require('../core/domain');

/* GET users listing. */
router.get('/', async function (req, res) {
    try {
        return res.json(await domain.getHosts());
    } catch (err) {
        return res.json(err);
    }
});

router.get('/:id', async function (req, res) {
    try {
        return res.json(await domain.findHost(req.params.id));
    } catch (err) {
        return res.json(err);
    }
})

router.put('/:id', async function (req, res) {
    try {
         let hostDTO = await domain.findHost(req.params.id);
         hostDTO.command = req.body.command;        
        return res.json(await domain.updateHostCommand(hostDTO));
    } catch (err) {
        return res.json(err);
    }
})

module.exports = router;