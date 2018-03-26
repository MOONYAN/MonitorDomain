var media = require('./hostRepository');
var service = {};

service.addHost = (host) => {
    return new Promise(
        (resolve, reject) => {
            media.addHost(host).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            });
        }
    );
};

service.deleteHost = (key) => {
    return new Promise((resolve, reject) => {
        media.deleteHost(key).then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        });
    });
};

service.getHosts = () => {
    return new Promise((resolve, reject) => {
        media.getHosts().then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        });
    });
};

service.findHost = (key) => {
    return new Promise((resolve, reject) => {
        media.findHost(key).then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        });
    });
};

service.monitorHosts = () => {

}

// var i=0;
// setInterval(()=>{    
//     console.log(i++);
// },1000);

module.exports = service;