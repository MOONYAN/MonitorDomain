const chai = require('chai');
const should = chai.should();
const findHostUseCase = require('../core/useCases/findHostUseCase');


describe('findHostUseCase', _ => {
    it('should get hostDTO', done => {
        let hostRepository = {
            async findHost(key) {
                return {
                    id: '9487',
                    name: 'Trump Server'
                };
            }
        }

        let hostDTOMaker = {
            make(host) {
                return {
                    name: host.name
                }
            }
        }

        let findHost = findHostUseCase.setup(hostRepository, hostDTOMaker);
        findHost(9487).then(hostDTO => {
            hostDTO.should.have.property('name');
            hostDTO.should.not.have.property('id');
            done();
        }, err => {
            done(err);
        });
    });
});