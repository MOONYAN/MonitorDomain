module.exports = {
    setup(iHostRepository, hostDTOMaker) {
        return async _ => {
            try {
                let hosts = await iHostRepository.getHosts();
                return hosts.map(host => hostDTOMaker.make(host));
            } catch (err) {
                throw err;
            }
        }
    }
};