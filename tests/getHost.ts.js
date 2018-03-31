var hostService = require('../hostService');
const util = require('util');

hostService.getHosts().then((hsots) => {
    console.log(util.inspect(hsots, false, null));
}, (err) => {
    console.log(err);
});