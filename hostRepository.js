var media = {};

media.addHost = (host) => {
    return new Promise((resolve, reject) => {
        // resolve({
        //     id: 1,
        //     name: host.name
        // });
        reject('err host name');
    });
};

media.deleteHost = (key) => {
    return new Promise((resolve, reject) => {
        resolve(`delete ${key} successfully`);
        // reject('err host key');
    });
};

media.getHosts = () => {
    return new Promise((resolve, reject) => {
        resolve([{
            id: 1,
            name: 'google.com'
        },{
            id: 2,
            name: 'facebook.com'
        }]);
        // reject('err host name');
    });
};

media.findHost = (key) => {
    return new Promise((resolve, reject) => {
        resolve({
            id: 1,
            name: 'google.com'
        });
        // reject('err host key');
    });
};

module.exports = media;