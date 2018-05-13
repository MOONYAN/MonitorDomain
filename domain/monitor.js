module.exports = class Monitor {
    constructor(eventEmitter, monitorService, hostService) {
        this.eventEmitter = eventEmitter;
        this.monitorService = monitorService;
        this.hostService = hostService;
    }

    async inspectHosts() {
        try {
            let hosts = await this.hostService.getHosts();
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
                let newHost = await this.hostService.updateHostStatus(host);
                this.eventEmitter.emit('statusChange', newHost);
            }
            return 'onVerify';
        } catch (err) {
            throw err;
        }
    }
}