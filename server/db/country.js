'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/e2t", {
  useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cities: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imgurl: {
            type: String
        }}],
    imgurl: {
        type: String
    },
    language: {
        type: String,
        required: true
    },
    created_at: Date,
    updated_at: Date
});
CountrySchema.pre('save', function(next) {
    "use strict";
    let currentDate = new Date();

    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

const Country = mongoose.model('Country', CountrySchema);
const functions = {
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
module.exports = Country;
for (var key in functions) {
    module.exports[key] = functions[key];
}