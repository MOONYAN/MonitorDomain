module.exports = class Monitor {
    constructor(iEmitter, iMonitorService, hostService) {
        this.iEmitter = iEmitter;
        this.iMonitorService = iMonitorService;
        this.hostService = hostService;
    }

    async inspectHosts() {
        try {
            let hosts = await this.hostService.getHosts();
            hosts.forEach(async element => {
                this.verify(element, await this.iMonitorService.queryHost(element));
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
                this.iEmitter.emit('statusChange', newHost);
            }
            return 'onVerify';
        } catch (err) {
            throw err;
        }
    }
}