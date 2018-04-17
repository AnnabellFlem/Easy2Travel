/*jslint maxerr: 10, es6, node, single, for, multivar, bitwise, white, this, devel, browser*/

var mongoose = require('mongoose');
//var crypto = require('crypto')
mongoose.connect("mongodb://localhost:27017/e2t", {
  useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: Date,
    updated_at: Date
});
var User = mongoose.model('User', UserSchema);
UserSchema.pre('save', function(next) {
    "use strict";
    var currentDate = new Date();

    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});
UserSchema.statics.authenticate = function (email, password, callback) {
    "use strict";
    User.findOne({email: email})
        .exec(function (err, user) {
        if (err) {
            return callback(err);
        }
        if (!user) {
            var e = new Error('User not found.');
            e.status = 401;
            return callback(e);
        }
        if (password === user.password) {
          return callback(null, user);
        } else {
          return callback();
        }
        
//      bcrypt.compare(password, user.password, function (err, result) {
//        if (result === true) {
//          return callback(null, user);
//        } else {
//          return callback();
//        }
//      })
    });
};
module.exports = User;