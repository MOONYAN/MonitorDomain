const chai = require('chai');
const should = chai.should();
const getHostUseCase = require('../core/useCases/getHostsUseCase');

describe('getHostUseCase', _ => {
    it('should get hostDTOs', done => {
        let hostRepository = {
            async getHosts() {
                return [{
                    id: '9487',
                    name: 'Trump Server'
                }, {
                    id: '698',
                    name: 'Ma Server'
                }];
            }
        }

        let hostDTOMaker = {
            make(host) {
                return {
                    name: host.name
                }
            }
        }

        let getHosts = getHostUseCase.setup(hostRepository, hostDTOMaker);

        getHosts().then(hostDTOs => {
            hostDTOs.should.have.lengthOf(2);
            hostDTOs[0].should.have.property('name');
            hostDTOs[0].should.not.have.property('id');
            done();
        }, err => {
            done(err);
        });
    });
});