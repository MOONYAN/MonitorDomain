var hostService = require('../hostService');
const util = require('util');

hostService.findHost('5abf7e6e1b3eb53bcc4bfa69').then((host) => {
    console.log(util.inspect(host, false, null));
}, (err) => {
    console.log(err);
});