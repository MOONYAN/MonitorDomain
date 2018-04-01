var notifyService = require('../notifyService');
var hostService = require('../hostService');

hostService.findHost('5ac0a299fdd49919e0c9c371').then((host) => {
    host.contacts.forEach(element => {
        notifyService.notify(element, {
            name: host.name,
            status: host.status
        });
    });
}, (err) => {
    console.log(err);
});