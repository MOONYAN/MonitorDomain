var contactService = require('../contactService');

contactService.addContact({
    name: 'Trump',
    email: 'Trump@gmail.com',
    address: {
        Line: 'TrumpLineid',
        FB: 'TrumpFB',
        Phone: '0806449'
    }
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});

contactService.addContact({
    name: 'Obama',
    email: 'Obama@gmail.com',
    address: {
        Line: 'ObamaLineid',
        FB: 'ObamaFB',
        Phone: '0806449'
    }
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});