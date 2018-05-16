var iSenders = {};

module.exports = {

    /**
     * 
     * @param {string} key 
     * @param {*} iSender 
     */
    use(key, iSender) {
        iSenders[key] = iSender;
    },

    /**
     * 
     * @param {{address:{Email:string, Line:string, FB:string, Phone:string}}} reveiver 
     * @param {*} message 
     */
    notify(reveiver, message) {
        for (let key in reveiver.address) {
            if (iSenders[key]) {
                iSenders[key].send(reveiver.address[key], message);
            }
        }
    }
}