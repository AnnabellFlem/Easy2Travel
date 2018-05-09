/*jslint maxerr: 10, es6, node, single, for, multivar, bitwise, white, this, devel, browser*/
'use strict';

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e2t", {
    useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PlaceSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    places: [{
        label: {
            type: String,
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        imgurl: {
            type: String
        },
        location: {
            type: [Number],
            required: true
        }
    }],
    language: {
        type: String,
        required: true
    },
    created_at: Date,
    updated_at: Date
});
PlaceSchema.pre('save', next => {
    let currentDate = new Date();

    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

const Place = mongoose.model('Place', PlaceSchema);
const functions = {
    getPlaceByLocation: l => {
        Place.findOne({
            'places.location': l
        },
       'places',
        (err, place) => {
            if (err) {
                return err;
            } else {
                place.places.forEach(item => {
                    if (item.location[0] === l[0] && item.location[1] === l[1])
                        console.log(item.label);
                });
            }
        });
    },
    getObjectId: id => new mongoose.Types.ObjectId(id)
};

module.exports = Place;
for (var key in functions) {
    module.exports[key] = functions[key];
}
