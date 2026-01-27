const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    Username:String,
    Email:String,
    Password:String,
    Age:Number,
});

const userModel = new mongoose.model("Users",userSchema);

module.exports = userModel;