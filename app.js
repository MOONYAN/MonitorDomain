var model = require('./domain');
var util = require('util');

model.getHosts().then(
    (result) => {
        console.log(util.inspect(result, false, null));
    },
    (err) => {
        console.log(err);
    }
);

model.findHost('5abf7e6e1b3eb53bcc4bfa69').then(
    (result) => {
        console.log(util.inspect(result, false, null));
    },
    (err) => {
        console.log(err);
    }
);