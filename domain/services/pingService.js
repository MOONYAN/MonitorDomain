var ping = require('ping');

module.exports = {
    /**
     * 
     * @param {{name:string}} host 
     */
    queryHost(host) {
        return new Promise((resolve, reject) => {
            let address = host.name;
            if (typeof address != 'string') {
                reject('address is not a string type');
            }

            ping.promise.probe(address)
                .then(function (res) {
                    resolve({
                        name: res.host,
                        ip: res.numeric_host,
                        status: (res.alive) ? "UP" : "DOWN"
                    });
                });
        });
    }
};