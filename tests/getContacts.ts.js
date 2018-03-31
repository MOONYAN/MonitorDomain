var contactService = require('../contactService');


contactService.getContacts().then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});