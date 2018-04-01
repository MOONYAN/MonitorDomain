var monitorService = require('./monitorService');
var hostService = require('./hostService');
var self = {};

self.inspectHosts = async () => {
    try {
        let hosts = await hostService.getHosts();
        hosts.forEach(async element => {
            self.verify(element, await monitorService.queryHost(element));
        });
        return 'onInspectedHosts';
    } catch (err) {
        throw err;
    }
};

self.verify = async (host, data) => {
    try {
        if (host.status != data.status) {
            host.status = data.status;
            host.ip = data.ip;
            let newHost = await hostService.updateHostStatus(host);
            console.log(newHost);
            return 'onVerify';
        }
    } catch (err) {
        throw err;
    }
}

module.exports = self;