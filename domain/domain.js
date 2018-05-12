var hostService = require('./services/hostService');
var monitor = require('./monitor');
var messageBus = require('./messageBus');
const HostEventHandler = require('./hostEventHandler');
const EventEmitter = require('./eventEmitter');
const Timer = require('./timer');

const notifyService = require('./services/notifyService');
notifyService.use('Email', require('./services/mailService'));
notifyService.use('Line', require('./services/lineService'));
notifyService.use('FB', require('./services/fbService'));
notifyService.use('Phone',require('./services/phoneService'));

let eventEmitter = new EventEmitter();
let hostEventHandler = new HostEventHandler(eventEmitter,notifyService);
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