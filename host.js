module.exports = class {
    constructor(host) {
        this.id = host.id;
        this.name = host.name;
        this.ip = host.ip || '';
        this.status = host.status || 'Unknown';
    }
};