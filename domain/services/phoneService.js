module.exports = {
    /**
     * 
     * @param {string} Phone 
     * @param {{name:string, status:string}} messageDTO 
     */
    send(Phone, messageDTO) {
        console.log(`Send Phone ${Phone} ->`, messageDTO);
    }
}