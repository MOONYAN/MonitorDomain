module.exports = {
    /**
     * 
     * @param {*} host 
     */
    make(host) {
        return {
            name: host.name,
            status: host.status
        }
    }
}