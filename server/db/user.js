'use strict';

//import {mongoose} from 'mongoose';
const mongoose = require('mongoose');
//var crypto = require('crypto')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds129670.mlab.com:29670/heroku_05k89dpz', {
    useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const UserSchema = new mongoose.Schema({
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
const User = mongoose.model('User', UserSchema);
UserSchema.pre('save', next => {
    let currentDate = new Date();

    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});
UserSchema.statics.authenticate = (email, password, callback) => {
    User.findOne({email: email})
        .exec(function (err, user) {
        if (err) {
            return callback(err);
        }
        if (!user) {
            let e = new Error('User not found.');
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