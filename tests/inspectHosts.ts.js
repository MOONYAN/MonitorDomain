var monitor = require('../monitor');
var monitorService = require('../monitorService');

monitor.inspectHosts().then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});

monitorService.queryHost({
    name: 'google.com'
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});