/*jslint maxerr: 10, es6, node, single, for, multivar, bitwise, white, this, devel, browser*/
'use strict';

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e2t", {
    useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var TimelineSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    locations: {
        type: [
            [Number]
        ],
        required: true
    },
    body: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        imgurl: {
            type: String
        },
        imgsize: {
            type: Number
        }
    }],
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        description: {
            type: String
        }
    }],
    created_at: Date,
    updated_at: Date
});
TimelineSchema.pre('save', function (next) {
    let currentDate = new Date();

    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

const Timeline = mongoose.model('Timeline', TimelineSchema);
const functions = {
    getTimeline: t => {
        return {
            id: t._id,
            userid: t.userid,
            title: t.title,
            locations: t.locations,
            body: t.body,
            likes: t.likes,
            comments: t.comments,
            created_at: t.created_at,
            updated_at: t.updated_at
        };
    },
    getObjectId: id => new mongoose.Types.ObjectId(id)
};
module.exports = Timeline;
for (var key in functions) {
    module.exports[key] = functions[key];
}