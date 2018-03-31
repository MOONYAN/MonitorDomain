var monitorService = require('./monitorService');
var hostService = require('./hostService');
var self = {};

self.inspectHosts = async () => {
    try {
        let hosts = await hostService.getHosts();
        hosts.forEach(element => {
            console.log(element);
        });
    } catch (err) {
        throw err;
    }
};

self.verify = async (host,data) => {
    try{
        if(host.status != data.status){
            // host.status = data.status;
            await hostService.updateHost(host);
            console.log(host);
        }
    }catch(err){
        throw err;
    }    
}

module.exports = self;