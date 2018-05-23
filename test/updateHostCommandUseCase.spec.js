const chai = require('chai');
const should = chai.should();
const updateHostCommandUseCase = require('../core/useCases/updateHostCommandUseCase');


describe('updateHostCommand', _ => {
    it('should get hostDTO', done => {
        let hostRepository = {
            async updateHostCommand(host) {
                return {
                    id: '9487',
                    name: 'Trump Server',
                    command: host.command
                };
            }
        }

        let hostDTOMaker = {
            make(host) {
                return {
                    name: host.name,
                    command: host.command
                }
            }
        }

        let updateHostCommand = updateHostCommandUseCase.setup(hostRepository, hostDTOMaker);
        updateHostCommand({
            command: 'Magic'
        }).then(hostDTO => {
            hostDTO.should.have.property('name');
            hostDTO.should.have.property('command').with.equal('Magic');
            hostDTO.should.not.have.property('id');
            done();
        }, err => {
            done(err);
        });
    });
});