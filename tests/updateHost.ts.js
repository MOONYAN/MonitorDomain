var hostService = require('../hostService');
const util = require('util');

var host = {
    id: '5abf7e6e1b3eb53bcc4bfa69',
    ip: '127.0.0.1',
    status:'Unknown'
};

hostService.updateHostStatus(host).then((newHost) => {
    console.log(util.inspect(newHost, false, null));
}, (err) => {
    console.log(err);
});