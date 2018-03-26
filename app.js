var model = require('./domain');

// model.addHost({
//     name: 'google.com'
// }).then((result) => {
//     console.log(result);
// }, (err) => {
//     console.log(err);
// });

// model.deleteHost(1).then(
//     (result) => {
//         console.log(result);
//     },
//     (err) => {
//         console.log(err);
//     }
// );

// model.getHosts().then(
//     (result) => {
//         console.log(result);
//     },
//     (err) => {
//         console.log(err);
//     }
// );

model.findHost(1).then(
    (result) => {
        console.log(result);
    },
    (err) => {
        console.log(err);
    }
);