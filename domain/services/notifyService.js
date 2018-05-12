var senders = {};

module.exports = {

    use(key, sender) {
        senders[key] = sender;
    },

    notify({address}, message) {
        for (let key in address) {
            if (senders[key]) {
                senders[key].send(address[key], message);
            }
        }
    }
}