var hostService = require('./hostService');
var self = {};

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