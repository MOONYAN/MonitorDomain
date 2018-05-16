'use strict';

var iInspectors = {};

module.exports = {
    use(key, iInspector) {
        iInspectors[key] = iInspector;
    },

    async queryHost(host) {
        try {
            if (host.command && iInspectors[host.command]) {
                return await iInspectors[host.command].queryHost(host);
            }
            return 'unvalid command';
        } catch (err) {
            throw err;
        }
    }
};