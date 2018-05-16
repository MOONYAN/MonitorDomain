module.exports = class HostService {
    constructor(iHostService) {
        this.iHostService = iHostService;
    };

    async addHost(host) {
        try {
            return await this.iHostService.addHost(host);
        } catch (err) {
            throw err;
        }
    };

    async updateHostCommand(host) {
        try {
            return await this.iHostService.updateHostCommand(host);
        } catch (err) {
            throw err;
        }
    };

    async updateHostStatus(host) {
        try {
            return await this.iHostService.updateHostStatus(host);
        } catch (err) {
            throw err;
        }
    };

    async attachContact(host, contact) {
        try {
            return await this.iHostService.attachContact(host, contact);
        } catch (err) {
            throw err;
        }
    }

    async getHosts() {
        try {
            return await this.iHostService.getHosts();
        } catch (err) {
            throw err;
        }
    };

    async findHost(key) {
        try {
            return await this.iHostService.findHost(key);
        } catch (err) {
            throw err;
        }
    };
}