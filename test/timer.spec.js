const chai = require('chai');
const should = chai.should();
const Timer = require('../core/entities/timer');
const EventEmitter = require('events');

describe('Timer', _ => {
    it('should get timeout events', done => {
        let emitter = new EventEmitter();
        emitter.once('timeout', _ => {
            timer.stop();
            done();
        });
        let timer = new Timer(emitter);
        timer.start(1);
    });
});