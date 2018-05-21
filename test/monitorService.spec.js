const chai = require('chai');
const should = chai.should();
const monitorService = require('../domain/entities/monitorService');

describe('MonitorService', _ => {
    it('should query host', done => {
        monitorService.use('Magic', {
            async queryHost(host) {
                let address = host.name;
                if (typeof address != 'string') {
                    throw 'address is not a string type';
                }
                return {
                    name: host.name,
                    ip: '0.0.0.0',
                    status: 'Down'
                };
            }
        });
        monitorService.queryHost({
            command: 'Magic',
            name: 'trump.com'
        }).then(data => {
            data.should.have.property('name');
            data.should.have.property('ip');
            data.should.have.property('status');
            done();
        }, err => {
            done(err);
        })
    })
});