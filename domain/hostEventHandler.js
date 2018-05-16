module.exports = class HostEventHandler {
    constructor(iEmitter, notifyService, messageDTOmaker) {
        iEmitter.on('statusChange', (host) => {
            host.contacts.forEach(element => {
                notifyService.notify(element, messageDTOmaker.make(host));
            });
        });
    }
};