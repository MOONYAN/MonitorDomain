module.exports = {
    setup(iHostRepository, hostDTOMaker) {
        return async key => {
            try {
                return hostDTOMaker.make(await iHostRepository.findHost(key));
            } catch (err) {
                throw err;
            }
        }
    }
};