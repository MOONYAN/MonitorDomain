var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://Sasuke:9487@ds033126.mlab.com:33126/narutomongo');

var HostSchema = require('./Schemas/hostSchema');
var ContactSchema = require('./Schemas/contactSchema');
var Host = require('./host');

var self = {};

self.addHost = async (host) => {
    try {
        return new Host(await HostSchema.create({
            name: host.name,
            ip: host.ip,
            status: host.status
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

self.attachContact = async (host, contact) => {
    try {
        return new Host(await HostSchema.findByIdAndUpdate(host.id, {
            '$addToSet': {
                "contacts": contact.id
            }
        }, {
            new: true
        }).populate('contacts').exec());
    } catch (err) {
        throw err;
    }
}

self.getHosts = async () => {
    try {
        let hosts = await HostSchema.find().populate('contacts').exec();
        return hosts.map(host => new Host(host));
    } catch (err) {
        throw err;
    }
};

self.findHost = async (key) => {
    try {
        return new Host(await HostSchema.findById(key).populate('contacts').exec());
    } catch (err) {
        throw err;
    }
};

module.exports = self;