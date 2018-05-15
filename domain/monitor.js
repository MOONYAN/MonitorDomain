module.exports = class Monitor {
    constructor(iEmitter, iMonitorService, iHostService) {
        this.iEmitter = iEmitter;
        this.iMonitorService = iMonitorService;
        this.iHostService = iHostService;
    }

    async inspectHosts() {
        try {
            let hosts = await this.iHostService.getHosts();
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
                let newHost = await this.iHostService.updateHostStatus(host);
                this.iEmitter.emit('statusChange', newHost);
            }
            return 'onVerify';
        } catch (err) {
            throw err;
        }
    }
}