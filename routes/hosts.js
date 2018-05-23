var express = require('express');
var router = express.Router();
var context = require('../core/context');

/* GET users listing. */
router.get('/', async function (req, res) {
    try {
        return res.json(await context.getHosts());
    } catch (err) {
        return res.json(err);
    }
});

router.get('/:id', async function (req, res) {
    try {
        return res.json(await context.findHost(req.params.id));
    } catch (err) {
        return res.json(err);
    }
})

router.put('/:id', async function (req, res) {
    try {
         let hostDTO = await context.findHost(req.params.id);
         hostDTO.command = req.body.command;        
        return res.json(await context.updateHostCommand(hostDTO));
    } catch (err) {
        return res.json(err);
    }
})

module.exports = router;