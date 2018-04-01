var hostService = require('../hostService');
const util = require('util');

var host = {
    id: '5ac0a299fdd49919e0c9c371'
};

var contact = {
    id: '5ac0a18e5bfe26539474d864'
};

hostService.attachContact(host, contact).then((newHost) => {
    console.log(util.inspect(newHost, false, null));
}, (err) => {
    console.log(err);
});