module.exports = {
    /**
     * 
     * @param {string} FB 
     * @param {{name:string, status:string}} messageDTO 
     */
    send(FB, messageDTO) {
        console.log(`Send FB ${FB} ->`, messageDTO);
    }
}