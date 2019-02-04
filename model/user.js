// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
        email        : String,
        password     : String,
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(pass) {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(pass) {
    return bcrypt.compareSync(pass, this.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema ,"UserLogin");