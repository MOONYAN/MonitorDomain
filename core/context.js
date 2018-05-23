const Monitor = require('./useCases/monitor');
const HostEventHandler = require('./useCases/hostEventHandler');
const EventEmitter = require('./entities/eventEmitter');
const Timer = require('./entities/timer');

const hostRepository = require('./repositories/mongoose/mongoHostRepository');

const notifyService = require('./entities/notifyService');
notifyService.use('Email', require('./services/mailService'));
notifyService.use('Line', require('./services/lineService'));
notifyService.use('FB', require('./services/fbService'));
notifyService.use('Phone', require('./services/phoneService'));

let eventEmitter = new EventEmitter();
let hostEventHandler = new HostEventHandler(eventEmitter, notifyService, require('./useCases/messageDTOMaker'));
let timer = new Timer(eventEmitter);
timer.start(3000);

const monitorService = require('./entities/monitorService');
monitorService.use('nmap', require('./services/nmapService'));
monitorService.use('ping', require('./services/nmapService'));

let monitor = new Monitor(eventEmitter, monitorService, hostRepository);
eventEmitter.on('timeout', _ => {
    monitor.inspectHosts();
});

const hostDTOMaker = require('./useCases/hostDTOMaker');

module.exports = {
    getHosts: require('./useCases/getHostsUseCase').setup(hostRepository, hostDTOMaker),
    findHost: require('./useCases/findHostUseCase').setup(hostRepository, hostDTOMaker),
    updateHostCommand: require('./useCases/updateHostCommandUseCase').setup(hostRepository, hostDTOMaker)
};