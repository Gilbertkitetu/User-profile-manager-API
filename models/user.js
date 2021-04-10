const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create a user schema and models

const UserSchema = new Schema({
name: {
    type: String,
    required: [true, 'Name field is required']
},
email: {
    type: String,
    required: [true, 'Email is required']
},
phone: {
    type: String
},
password: {
    type: String
}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;