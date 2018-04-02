var pingService = require('../pingService');

pingService.queryHost({
    name: 'google.com'
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});