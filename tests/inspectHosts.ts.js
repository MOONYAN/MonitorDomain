var monitor = require('../monitor');
var monitorService = require('../monitorService');
var hostEventHandler = require('../hostEventHandler');

monitor.inspectHosts().then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});

monitorService.queryHost({
    name: 'google.com',
    command:'nmap'
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});