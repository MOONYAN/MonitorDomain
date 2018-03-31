var model = require('./domain');
var monitor = require('./monitorService');
// model.addHost({
//     name: 'google.com'
// }).then((result) => {
//     console.log(result);
// }, (err) => {
//     console.log(err);
// });

model.updateHost({
    id: '5ab917f34789e82a5ceb53d8',
    name: "google.com"
}).then(
    (result) => {
        console.log(result);
    },
    (err) => {
        console.log(err);
    }
);

// model.deleteHost('5ab8f4db01bc6132c8622769').then(
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

// model.findHost('5ab1c3b372b3749551e8fdc1').then(
//     (result) => {
//         console.log(result);
//     },
//     (err) => {
//         console.log(err);
//     }
// );

// var Host = require('./host');

// let host = new Host({
//     id:1,
//     name:'gogole.com'  
// });

// console.log(host);

// var Contact = require('./contact');

// let contact = new Contact({
//     id:1,
//     name:'Trump',
//     email:'trump@gmail.com',
//     address:{
//         Line:'trumpId',
//         FB:'trumpFB'
//     }
// });

// monitor.queryHost({
//     name: 'google.com'
// }).then(
//     (result) => {
//         console.log(result);
//     }, (err) => {
//         console.log(err);
//     }
// );