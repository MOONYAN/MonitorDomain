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
     * @param {{address:{Email:string, Line:string, FB:string, Phone:string}}} receiver 
     * @param {{name:string, status:string}} messageDTO 
     */
    notify(receiver, messageDTO) {
        for (let key in receiver.address) {
            if (iSenders[key]) {
                iSenders[key].send(receiver.address[key], messageDTO);
            }
        }
    }
}