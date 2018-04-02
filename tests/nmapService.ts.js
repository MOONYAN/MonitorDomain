var nmapService = require('../nmapService');

nmapService.queryHost({
    name: 'google.com'
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});