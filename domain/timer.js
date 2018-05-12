module.exports = class Timer {

    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.intervalRef = null;
    }

    start(interval) {
        this.intervalRef = setInterval(_ => {
            this.eventEmitter.emit('timeout');
        }, interval);
    }

    stop() {
        clearInterval(this.intervalRef);
    }
}