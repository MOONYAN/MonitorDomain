const chai = require('chai');
const should = chai.should();
chai.use(require('chai-events'));
const Monitor = require('../domain/useCases/monitor');
const eventEmitter = require('events');

const monitorService = {
    async queryHost(host) {
        return {
            name: host.name,
            ip: '0.0.0.0',
            status: 'DOWN'
        }
    }
}

describe('Monitor', _ => {
    it('should get update', done => {
        let emitter = new eventEmitter();
        emitter.once('statusChange', host => {
            host.should.have.property('name');
            host.should.have.property('ip');
            host.should.have.property('status');
            done();
        });
        let hostRepository = {
            async getHosts() {
                return [{
                    name: 'trump',
                }];
            },

            async updateHostStatus(host) {
                return host;
            }
        }
        let monitor = new Monitor(emitter, monitorService, hostRepository);
        monitor.inspectHosts();
    });
});