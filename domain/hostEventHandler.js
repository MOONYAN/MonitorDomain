module.exports = class HostEventHandler {
    constructor(eventEmitter,notifyService) {
        eventEmitter.on('statusChange', (host) => {
            host.contacts.forEach(element => {
                notifyService.notify(element, {
                    name: host.name,
                    status: host.status
                });
            });
        });
    }
};