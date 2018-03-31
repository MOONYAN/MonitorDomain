var hostService = require('./hostService');
var self = {};

self.addHost = async (host) => {
    try {
        return await hostService.addHost(host);
    } catch (err) {
        throw err;
    }
};

self.updateHost = async (host) => {
    try {
        return await hostService.updateHost(host);
    } catch (err) {
        throw err;
    }
};

self.deleteHost = async (key) => {
    try {
        return await hostService.deleteHost(key);
    } catch (err) {
        throw err;
    }
};

self.getHosts = async () => {
    try {
        return await hostService.getHosts();
    } catch (err) {
        throw err;
    }
};

self.findHost = async (key) => {
    try {
        return await hostService.findHost(key);
    } catch (err) {
        throw err;
    }
};

self.monitorHosts = () => {

}

// var i=0;
// setInterval(()=>{    
//     console.log(i++);
// },1000);

module.exports = self;