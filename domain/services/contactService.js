module.exports = class ContactService {
    constructor(iContactService) {
        this.iContactService = iContactService;
    }

    async addContact(contact) {
        try {
            return await this.iContactService.addContact(contact);
        } catch (err) {
            throw err;
        }
    };

    async getContacts() {
        try {
            return await this.iContactService();
        } catch (err) {
            throw err;
        }
    };
};