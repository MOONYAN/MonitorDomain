const chai = require('chai');
const should = chai.should();
const HostService = require('../domain/services/hostService');

describe('HostService', _ => {
    it('should add host', done => {
        let hostService = new HostService({
            async addHost(host) {
                return {
                    id: '9487',
                    name: host.name,
                    command: host.command,
                    ip: '',
                    status: 'Unknown',
                    contact: []
                }
            }
        });

        hostService.addHost({
            name: 'google.com',
            command: 'Yee'
        }).then((newHost) => {
            newHost.should.have.property('id');
            newHost.should.have.property('name');
            newHost.should.have.property('command');
            newHost.should.have.property('ip');
            newHost.should.have.property('status');
            newHost.should.have.property('contact').with.lengthOf(0);
            done();
        }, err => {
            done(err);
        });
    })

    it('should update host command', done => {
        let hostService = new HostService({
            async updateHostCommand({id,command}) {
                return {
                    id: id,
                    name: 'Trump',
                    command: command,
                    ip: '',
                    status: 'Unknown',
                    contact: []
                }
            }
        });

        hostService.updateHostCommand({
            id:'9487',
            command: 'Yee'
        }).then((newHost) => {
            newHost.should.have.property('id');
            newHost.should.have.property('name');
            newHost.should.have.property('command').with.equal('Yee');
            newHost.should.have.property('ip');
            newHost.should.have.property('status');
            newHost.should.have.property('contact').with.lengthOf(0);
            done();
        }, err => {
            done(err);
        });
    })
});