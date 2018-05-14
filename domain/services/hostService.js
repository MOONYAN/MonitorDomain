module.exports = class HostService {
    constructor(proxy) {
        this.service = proxy;
    };

    async addHost(host) {
        try {
            return await this.service.addHost(host);
        } catch (err) {
            throw err;
        }
    };

    async updateHostCommand(host) {
        try {
            return await this.service.updateHostCommand(host);
        } catch (err) {
            throw err;
        }
    };

    async updateHostStatus(host) {
        try {
            return await this.service.updateHostStatus(host);
        } catch (err) {
            throw err;
        }
    };

    async attachContact(host, contact) {
        try {
            return await this.service.attachContact(host, contact);
        } catch (err) {
            throw err;
        }
    }

    async getHosts() {
        try {
            return await this.service.getHosts();
        } catch (err) {
            throw err;
        }
    };

    async findHost(key) {
        try {
            return await this.service.findHost();
        } catch (err) {
            throw err;
        }
    };
}