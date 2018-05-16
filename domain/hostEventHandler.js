
module.exports = class HostEventHandler {
    constructor(iEmitter, notifyService) {
        iEmitter.on('statusChange', (host) => {
            host.contacts.forEach(element => {
                let messageDTO = {
                    name: host.name,
                    status: host.status
                }
                notifyService.notify(element, messageDTO);
            });
        });
    }
};