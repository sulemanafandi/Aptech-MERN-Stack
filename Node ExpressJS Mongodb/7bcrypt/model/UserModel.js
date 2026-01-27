const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Email:String,
    Password:String
})

const userModel = new mongoose.model('Users',userSchema);

module.exports = userModel;