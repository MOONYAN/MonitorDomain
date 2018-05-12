const chai = require('chai');
const should = chai.should();
const notifyService = require('../domain/services/notifyService');


describe('NotifyService', _ => {
    it('should get notification message', done => {
        notifyService.use('URL', {
            send(URL, message) {
                URL.should.equal('ntut.edu.com');
                message.should.equal('mow~');
                done();
            }
        });
        let address = {
            URL: 'ntut.edu.com'
        }

        notifyService.notify({address}, 'mow~');
    });
});