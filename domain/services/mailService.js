module.exports = {
    /**
     * 
     * @param {string} Email 
     * @param {{name:string, status:string}} messageDTO 
     */
    send(Email, messageDTO) {
        console.log(`Send Email ${Email} ->`, messageDTO);
    }
}