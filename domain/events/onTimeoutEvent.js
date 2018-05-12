module.exports = class {
    constructor() {
        this.eventType = 'onTimeoutEvent';
        this.argument = new Date().toTimeString();
    }
};