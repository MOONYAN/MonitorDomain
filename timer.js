var messageBus = require('./messageBus');
var OnTimeoutEvent = require('./onTimeoutEvent')

setInterval(_ => {
    messageBus.brocast(new OnTimeoutEvent());
}, 3000);

module.exports = this;