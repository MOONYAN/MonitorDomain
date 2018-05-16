const chai = require('chai');
const should = chai.should();
const HostEventHadler = require('../domain/hostEventHandler');
const EventEmitter = require('events');

describe('HostEventHadler', _ => {
    it('should handle host event', done => {
        let messageDTOMaker = {
            make(host) {
                return {
                    name: host.name,
                    status: host.status
                }
            }
        };
        let emitter = new EventEmitter();
        let notifyService = {
            notify(contact, subject) {
                contact.should.have.property('address');
                subject.should.have.property('name');
                subject.should.have.property('status');
                done();
            }
        };
        let handler = new HostEventHadler(emitter, notifyService, messageDTOMaker);
        let host = {
            name: 'Latte',
            status: 'UP',
            contacts: [{
                address: {
                    Email: 'trump@gmail.com',
                    Phone: '0800-092-000'
                }
            }]
        }
        emitter.emit('statusChange', host);
    });
});