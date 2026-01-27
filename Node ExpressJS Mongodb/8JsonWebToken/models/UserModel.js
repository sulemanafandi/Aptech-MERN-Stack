const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    UserName:String,
    Email:String,
    Password:String,
    Role:String
});

const UserModel = mongoose.model('JWT',UserSchema);

module.exports = UserModel;