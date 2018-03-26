var media = {};

media.addHost = async (host) => {
    return {
        id: 1,
        name: host.name
    };
    // throw 'err host name';
};

media.deleteHost = async (key) => {
    return `delete ${key} successfully`;
    // throw 'err host key';
};

media.getHosts = () => {
    return [{
        id: 1,
        name: 'google.com'
    }, {
        id: 2,
        name: 'facebook.com'
    }];
    // throw 'get hosts on err';
};

media.findHost = (key) => {
    return {
        id: 1,
        name: 'google.com'
    };
    // throw 'err host key';
};

module.exports = media;