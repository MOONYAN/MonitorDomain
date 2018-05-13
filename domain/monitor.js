var hostService = require('./services/hostService');

module.exports = class Monitor {
    constructor(eventEmitter, monitorService) {
        this.eventEmitter = eventEmitter;
        this.monitorService = monitorService;
    }

    async inspectHosts() {
        try {
            let hosts = await hostService.getHosts();
            hosts.forEach(async element => {
                this.verify(element, await this.monitorService.queryHost(element));
            });
            return 'onInspectedHosts';
        } catch (err) {
            throw err;
        }
    }

    async verify(host, data) {
        try {
            if (host.status != data.status) {
                host.status = data.status;
                host.ip = data.ip;
                let newHost = await hostService.updateHostStatus(host);
                this.eventEmitter.emit('statusChange', newHost);
            }
            return 'onVerify';
        } catch (err) {
            throw err;
        }
    }
}