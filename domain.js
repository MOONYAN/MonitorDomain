var hostService = require('./hostService');
var monitor = require('./monitor');
var messageBus = require('./messageBus');
var hostEventHandler = require('./hostEventHandler');
var timer = require('./timer');
var self = {};

self.getHosts = async () => {
    try {
        return await hostService.getHosts();
    } catch (err) {
        throw err;
    }
};

self.findHost = async (key) => {
    try {
        return await hostService.findHost(key);
    } catch (err) {
        throw err;
    }
};

messageBus.subscribe((event)=>{
    if (event.eventType == 'onTimeoutEvent') {
        console.log(event);
        monitor.inspectHosts();
    }
});

module.exports = self;