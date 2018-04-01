var messageBus = require('./messageBus');

messageBus.subscribe((event) => {    
    console.log(event);
    console.log('todo notify');
});

module.exports = this;