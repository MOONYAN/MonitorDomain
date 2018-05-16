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
                let inspectDTO = await this.iMonitorService.queryHost(element);
                this.verify(element, inspectDTO);
            });
            return 'onInspectedHosts';
        } catch (err) {
            throw err;
        }
    }
    /**
     * 
     * @param {*} host 
     * @param {{status:string, ip:string, name:string}} inspectDTO 
     */
    async verify(host, inspectDTO) {
        try {
            if (host.status != inspectDTO.status) {
                host.status = inspectDTO.status;
                host.ip = inspectDTO.ip;
                let newHost = await this.iHostService.updateHostStatus(host);
                this.iEmitter.emit('statusChange', newHost);
            }
            return 'onVerify';
        } catch (err) {
            throw err;
        }
    }
}