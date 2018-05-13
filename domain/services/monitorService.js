'use strict';

var services = {};

module.exports = {
    use(key, service) {
        services[key] = service;
    },

    async queryHost(host) {
        try {
            if (host.command && services[host.command]) {
                return services[host.command].queryHost(host);
            }
            return 'unvalid command';
        } catch (err) {
            throw err;
        }
    }
};