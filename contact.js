module.exports = class {
    constructor(contact) {
        this.id = contact.id;
        this.name = contact.name;
        this.email = contact.email;
        this.address = contact.address || {};
        this.hosts = contact.hosts || [];
    }

    monitor(host) {
        this.hosts.push(host);
    }
};