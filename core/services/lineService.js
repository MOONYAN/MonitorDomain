module.exports = {
    /**
     * 
     * @param {string} Line 
     * @param {{name:string, status:string}} messageDTO  
     */
    send(Line, messageDTO) {
        console.log(`Send Line ${Line} ->`, messageDTO);
    }
}