var hostService = require('../hostService');
const util = require('util');

var host = {
    id: '5abf7e6e1b3eb53bcc4bfa69'
};

var contact = {
    id: '5abf528920a6fb5864dc67b0'
};

hostService.attachContact(host, contact).then((newHost) => {
    console.log(util.inspect(newHost, false, null));
}, (err) => {
    console.log(err);
});