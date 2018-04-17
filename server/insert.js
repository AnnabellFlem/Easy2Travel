const Place = require('./db/place');

function ins()
{
    var p = {
        country: 'A',
        city: 'A',
        places: [{
            label: 'A',
            description: 'A',
            imgurl: 'aa',
            location: [22.2, 33.3]}]
    };
    Place.create(p, function(err, item) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('OK: ' + item + ' inserted.');
        }
    });
}

ins();