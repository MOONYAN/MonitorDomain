var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://Sasuke:9487@ds033126.mlab.com:33126/narutomongo');

var HostSchema = require('./Schemas/hostSchema');
var Host = require('./host');

var self = {};

self.addHost = async (host) => {
    try {
        return new Host(await HostSchema.create({
            name: host.name
        }));
    } catch (err) {
        throw err;
    }
};

self.deleteHost = async (key) => {
    try {
        await HostSchema.findByIdAndRemove(key).exec();
        return `delete ${key} successfully`;
    } catch (err) {
        throw err;
    }
};

self.updateHost = async (host) => {
    try {
        await HostSchema.findByIdAndUpdate(host.id,host).exec();
        return `update ${host.key} successfully`;
    } catch (err) {
        throw err;
    }
}

self.getHosts = async () => {
    try {
        let hosts = await HostSchema.find().exec();
        return hosts.map(host => new Host(host));
    } catch (err) {
        throw err;
    }
};

self.findHost = async (key) => {
    try {
        return new Host(await HostSchema.findById(key).exec());
    } catch (err) {
        throw err;
    }
};

module.exports = self;