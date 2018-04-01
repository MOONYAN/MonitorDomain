var hostService = require('../hostService');

hostService.addHost({
    name: 'google.com'
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});