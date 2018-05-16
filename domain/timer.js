module.exports = class Timer {

    constructor(iEmitter) {
        this.iEmitter = iEmitter;
        this.intervalRef = null;
    }

    /**
     * 
     * @param {number} interval 
     */
    start(interval) {
        this.intervalRef = setInterval(_ => {
            this.iEmitter.emit('timeout');
        }, interval);
    }

    stop() {
        clearInterval(this.intervalRef);
    }
}