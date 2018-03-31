var mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator'),
    Schema = mongoose.Schema;

var contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        Line: {
            type: String
        },
        FB: {
            type: String
        },
        Phone:{
            type: String
        }
    }
});

contactSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Contact', contactSchema);