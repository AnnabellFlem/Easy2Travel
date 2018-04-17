/*jslint maxerr: 10, es6, node, single, for, multivar, bitwise, white, this, devel, browser*/

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e2t", {
  useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var PlaceSchema = new mongoose.Schema({
    placeid: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    country: {
        type: String,
        required: true
    },
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
        },
        created_at: Date,
        updated_at: Date
    }]  
});
PlaceSchema.pre('save', function(next) {
    "use strict";
    var currentDate = new Date();

    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

var Place = mongoose.model('Place', PlaceSchema);
var functions = {
//    getTimeline : function(t) {
//         "use strict";
//         return {
//             id: t._id,
//             userid: t.userid,
//             title: t.title,
//             body: t.body,
//             imgurl: t.imgurl,
//             imgsize: t.imgsize,
//             created_at: t.created_at,
//             updated_at: t.updated_at
//         };
//     },
//     getObjectId : function(id) {
//         "use strict";
//         return new mongoose.Types.ObjectId(id);
//     return mongoose.Types.ObjectId(id); //
//     }
};
module.exports = Place;
for (var key in functions) {
    module.exports[key] = functions[key];
}