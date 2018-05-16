'use strict';

var iInspectors = {};

module.exports = {
    /**
     * 
     * @param {string} key 
     * @param {*} iInspector 
     */
    use(key, iInspector) {
        iInspectors[key] = iInspector;
    },
    /**
     * 
     * @param {{command:string,name:string}} host 
     */
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