var hostService = require('./services/hostService');
var monitor = require('./monitor');
var messageBus = require('./messageBus');
var hostEventHandler = require('./hostEventHandler');
const EventEmitter = require('./eventEmitter');
const Timer = require('./timer');

let eventEmitter = new EventEmitter();
let timer = new Timer(eventEmitter);
timer.start(3000);

eventEmitter.on('timeout', _ => {
    monitor.inspectHosts();
});

module.exports = {

    async getHosts() {
        try {
            return await hostService.getHosts();
        } catch (err) {
            throw err;
        }
    },

    async findHost(key) {
        try {
            return await hostService.findHost(key);
        } catch (err) {
            throw err;
        }
    },

    async updateHostCommand(host) {
        try {
            return await hostService.updateHostCommand(host);
        } catch (err) {
            throw err;
        }
    }
};