module.exports = class HostEventHandler {
    constructor(iEmitter, notifyService) {
        iEmitter.on('statusChange', (host) => {
            host.contacts.forEach(element => {
                notifyService.notify(element, {
                    name: host.name,
                    status: host.status
                });
            });
        });
    }
};