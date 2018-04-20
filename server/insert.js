const Place = require('./db/place');

function ins()
{
    var pl = [{
        city: 'Kiev',
        description : '',
        places: [{
            label: 'A',
            description: 'A',
            imgurl: 'aa',
            location: [22.2, 33.3]}],
        language: 'ua'
    }];
    pl.map(p => {
        Place.create(p, function(err, item) {
            if (err) {
                console.log('Error: ' + err);
            } else {
                console.log('OK: ' + item + ' inserted.');
//                process.exit(-1);
            }
        });
    });
}

ins();