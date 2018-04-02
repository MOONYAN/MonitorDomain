'use strict';
var nmapService = require('./nmapService');
var pingService = require('./pingService');

// var nmap = require('node-nmap');

class MonitorService {
    async queryHost(host) {
        try {
            return await nmapService.queryHost(host);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new MonitorService();