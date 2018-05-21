module.exports = {
    setup(iHostRepository, hostDTOMaker) {
        return async host => {
            try {
                return hostDTOMaker.make(await iHostRepository.updateHostCommand(host));
            } catch (err) {
                throw err;
            }
        }
    }
};