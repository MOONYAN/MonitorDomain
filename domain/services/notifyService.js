var senders = {};

module.exports = {

    use(key, sender) {
        senders[key] = sender;
    },

    notify(receiver, message) {
        let address = receiver.address;
        for (let key in address) {
            if (senders[key]) {
                senders[key].send(address[key], message);
            }
        }
    }
}