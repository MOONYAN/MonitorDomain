const Monitor = require('./monitor');
const HostEventHandler = require('./hostEventHandler');
const EventEmitter = require('./entities/eventEmitter');
const Timer = require('./entities/timer');

const hostRepository = require('./repositories/mongoose/mongoHostRepository');

const notifyService = require('./services/notifyService');
notifyService.use('Email', require('./services/mailService'));
notifyService.use('Line', require('./services/lineService'));
notifyService.use('FB', require('./services/fbService'));
notifyService.use('Phone', require('./services/phoneService'));

let eventEmitter = new EventEmitter();
let hostEventHandler = new HostEventHandler(eventEmitter, notifyService, require('./messageDTOMaker'));
let timer = new Timer(eventEmitter);
timer.start(3000);

const monitorService = require('./services/monitorService');
monitorService.use('nmap', require('./services/nmapService'));
monitorService.use('ping', require('./services/nmapService'));

let monitor = new Monitor(eventEmitter, monitorService, hostRepository);
eventEmitter.on('timeout', _ => {
    monitor.inspectHosts();
});

const hostDTOMaker = require('./hostDTOMaker');

module.exports = {

    async getHosts() {
        try {
            let hosts = await hostRepository.getHosts();
            return hosts.map(host => hostDTOMaker.make(host));
        } catch (err) {
            throw err;
        }
    },

    async findHost(key) {
        try {
            return hostDTOMaker.make(await hostRepository.findHost(key));
        } catch (err) {
            throw err;
        }
    },

    async updateHostCommand(host) {
        try {
            return hostDTOMaker.make(await hostRepository.updateHostCommand(host));
        } catch (err) {
            throw err;
        }
    }
};