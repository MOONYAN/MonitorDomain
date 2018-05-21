const contactDTOMaker = require('./contactDTOMaker');

module.exports = {
    make(host) {
        return {
            id: host.id,
            name: host.name,
            command: host.command,
            ip: host.ip,
            status: host.status,
            contacts: host.contacts.map(contact => contactDTOMaker.make(contact))
        };
    }
};