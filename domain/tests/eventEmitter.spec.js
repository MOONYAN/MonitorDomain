const chai = require("chai");
chai.use(require("chai-events"));
const should = chai.should();
const EventEmitter = require("../eventEmitter");

describe("Event Emitting", function () {

    it("should get emitted events", function () {
        let emitter = new EventEmitter();
        let p = emitter.should.emit("get");
        setTimeout(function () {
            emitter.emit("get");
        }, 200);
        return p;
    });

    it("should handle non-emitted events", function () {
        let emitter = new EventEmitter();
        emitter.should.not.emit("missing");
    });

    it("should handle pee events", function () {
        let emitter = new EventEmitter();
        let p = emitter.should.emit("pee");
        emitter.once('pee', message => {
            message.should.equal('receive pee events');
        });
        emitter.emit('pee','receive pee events');
        return p;
    });

});