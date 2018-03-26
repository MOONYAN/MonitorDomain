var media = require('./hostRepository');
var service = {};

service.addHost = async (host) => {
    try {
        return await media.addHost(host);
    } catch (err) {
        throw err;
    }
};

service.deleteHost = async (key) => {
    try {
        return await media.deleteHost(key);
    } catch (err) {
        throw err;
    }
};

service.getHosts = async () => {
    try {
        return await media.getHosts();
    } catch (err) {
        throw err;
    }
};

service.findHost = async (key) => {
    try {
        return await media.findHost(key);
    } catch (err) {
        throw err;
    }
};

service.monitorHosts = () => {

}

// var i=0;
// setInterval(()=>{    
//     console.log(i++);
// },1000);

module.exports = service;