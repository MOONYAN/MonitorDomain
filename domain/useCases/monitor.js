module.exports = class Monitor {
    constructor(iEmitter, iMonitorService, iHostRepository) {
        this.iEmitter = iEmitter;
        this.iMonitorService = iMonitorService;
        this.iHostRepository = iHostRepository;
    }

    async inspectHosts() {
        try {
            let hosts = await this.iHostRepository.getHosts();
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
                let newHost = await this.iHostRepository.updateHostStatus(host);
                this.iEmitter.emit('statusChange', newHost);
            }
            return 'onVerify';
        } catch (err) {
            throw err;
        }
    }
}