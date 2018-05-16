var iSenders = {};

module.exports = {

    use(key, iSender) {
        iSenders[key] = iSender;
    },

    notify({address}, message) {
        for (let key in address) {
            if (iSenders[key]) {
                iSenders[key].send(address[key], message);
            }
        }
    }
}