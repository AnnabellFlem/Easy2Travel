'use strict';

const express = require('express');
//var router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        "use strict";
        cb(null, './blog/img/');
    },
    filename: function (req, file, cb) {
        "use strict";
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
    }
});
const upload = multer({
    storage: storage
}).single('pic');
const passport = require('passport');

const port = 3000;
//http://expressjs.com/ru/guide/routing.html
//https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619
//var express = require('express'),
//    app = express(),
const statusOK = {
    status: 'OK'
};
const statusERROR = {
    status: 'ERROR'
};
const User = require('./server/db/user');
const Timeline = require('./server/db/blog');
const Place = require('./server/db/place');
const Country = require('./server/db/country');
const Util = require('./js/server/util');
//var pathoptions = 'en/';//??

// var getCaseInsensitive = value => new RegExp(`^${value}$`, 'i');

//app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/css', express.static('css'));
app.use('/fontawesome', express.static('fontawesome'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));
app.use('/bootstrap/css', express.static('bootstrap/css'));
app.use('/bootstrap/js', express.static('bootstrap/js'));
app.use('/en', express.static('en'));
app.use('/ua', express.static('ua'));
app.use('/blog', express.static('blog'));
app.use(express.static(__dirname + '/en')); //??
app.use(session({
    secret: 'e2t',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

function setStatusMessage(status, msg, data) {
    if (msg) {
        status.message = msg;
    } else {
        delete status.message;
    }
    if (data) {
        status.data = data;
    } else {
        delete status.data;
    }

    return status;
}

function getTimeline(req, res) {
    let route = req.session.route;
    let userid = req.session.userId;

    if (route) {
        let locationid = route.locationid;
        let timelineData = {
            userid: userid,
            title: route.title,
            places: []
        };
        delete req.session.route;
        Place.findOne({
                'places': {
                    $elemMatch: {
                        '_id': {
                            $in: locationid
                        }
                    }
                },
            },
            'places',
            (err, place) => {
                if (err) {
                    console.log(err);
                    res.send(setStatusMessage(statusERROR, err));
                } else {
                    place.places.map(item => {
                        locationid
                            .filter(e => item._id.equals(e))
                            .map(e => {
                                timelineData.places.push({
                                    locationid: e,
                                    location: item.location,
                                    title: item.label
                                });
                            });
                    });

                    Timeline.create(timelineData, (err, timeline) => {
                        if (err) {
                            console.log(err);
                            res.send(setStatusMessage(statusERROR, err));
                        } else {
                            console.log('Timeline created.');
                            res.send(setStatusMessage(statusOK, "", {
                                timeline: [Timeline.getTimeline(timeline)]
                            }));
                        }
                    });
                }
            });
    } else {
        Timeline.getTimelineByUserId(userid)
            .then(timeline =>
                res.send(setStatusMessage(statusOK, "", {
                    timeline: timeline.map(t => Timeline.getTimeline(t))
                })))
            .catch(err => {
                console.log(err);
                res.send(setStatusMessage(statusERROR, err));
            });
    }
}

function getAllTimeline(res) {
    Timeline.find({})
        .sort({
            created_at: -1
        })
        .exec((err, timeline) => {
            if (err) {
                console.log(err);
                res.send(setStatusMessage(statusERROR, err));
            } else {
                User.find({}, (err, user) => {
                    if (err) {
                        console.log(err);
                        res.send(setStatusMessage(statusERROR, err));
                    } else {
                        res.send(setStatusMessage(statusOK, "", {
                            timeline: timeline.map(t => {
                                let tl = Timeline.getTimeline(t);

                                tl.username = user.filter(u => t.userid.equals(u._id))[0].username;

                                return tl;
                            })
                        }));
                    }
                });
            }
        });
}

function getError(err) {
    switch (err.code) {
        case 11000:
            return "This name or email already exists.";
        default:
            return err.message;
    }
}

function getUser(userData, req, res) {
    //    if (!userData.username) {
    //        setStatusMessage(statusERROR, "Name or email can't be empty.");
    //    } else if (!userData.password) {
    //        setStatusMessage(statusERROR, "Password can't be empty.");
    //    }
    User.findOne({
            $or: [{
                    'username': userData.username
                },
                {
                    'email': userData.username
                }
            ]
        },
        function (err, user) {
            if (err) {
                res.send(setStatusMessage(statusERROR, getError(err)));
            } else {
                if (!user) {
                    res.send(setStatusMessage(statusERROR, "User not found."));
                } else if (userData.password !== user.password) {
                    res.send(setStatusMessage(statusERROR, "Incorrect password."));
                } else {
                    req.session.userId = user._id;
                    req.session.username = user.username;
                    res.send(setStatusMessage(statusOK, "", user));
                }
            }
        });
}

function init() {
    setStatusMessage(statusOK);
    setStatusMessage(statusERROR);
}

function validate(userData) {
    if (!userData.username) {
        setStatusMessage(statusERROR, "Name can't be empty.");
        return false;
    }
    if (!Util.validateEmail(userData.email)) {
        setStatusMessage(statusERROR, "Invalid email address.");
        return false;
    }
    if (!userData.password) {
        setStatusMessage(statusERROR, "Password can't be empty.");
        return false;
    }
    if (userData.password !== userData.repassword) {
        setStatusMessage(statusERROR, "Passwords don't match.");
        return false;
    }

    return true;
}

function createUser(userData, req, res) {
    User.create(userData, (err, user) => {
        if (err) {
            res.send(setStatusMessage(statusERROR, getError(err)));
        } else {
            req.session.userId = user._id;
            req.session.username = user.username;
            res.send(setStatusMessage(statusOK, "", user));
        }
    });
}

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/en/index.html'), function (err) {
        console.log(err);
    });
    //	res.sendFile(path.join(__dirname, 'en', 'index.html'));
});
//res.sendFile('index1.html', { root: path.join(__dirname, //'../public') });

app.get('/isloggedin', (req, res) => {
    console.log(`[${new Date()}]: userId => ${req.session.userId}`);
    //    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    //    console.log(fullUrl);
    //'/foo/bar/baz/asdf/quux.html'.split('/').pop()    
    //     res.locals.current_path= req.path
    //    console.log(req.path);
    res.send(setStatusMessage(statusOK, "", {
        userid: req.session.userId,
        username: req.session.username
    }));
});

app.get('/profile', (req, res) => {
    //	console.log(pathoptions);
    //	res.sendFile('profile.html', pathoptions, function(err) {
    //      console.log(err);
    //        if (err) {
    //        if (err.code === "ECONNABORT" && res.statusCode == 304) {
    //      // No problem, 304 means client cache hit, so no data sent.
    //      console.log('304 cache hit for ' + filename);
    //      return;
    //        }
    //        console.error("SendFile error:", err, " (status: " + err.status + ")");
    //        if (err.status) {
    //        res.status(err.status).end();
    //        }
    //    }
    //    else {
    //        console.log('Sent:', filename);
    //        }
    //        return next(err);
    //    });
    res.sendFile(path.join(__dirname + '/en/404.html'), err => {
        console.log(err);
        //        res.end();
    });
    //    res.send(statusOK);
    //	res.sendFile(path.join(__dirname, 'en', 'profile.html'));
});

app.post('/login', (req, res) => {
    let userData = {
        username: req.body.username,
        password: req.body.password
    };
    //    init();
    getUser(userData, req, res);
});

app.post('/register', (req, res) => {
    let userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        repassword: req.body.repassword
    };
    init();
    if (validate(userData)) {
        createUser(userData, req, res);
    } else {
        res.send(statusERROR);
    }
});

app.get('/logout', (req, res, next) => {
    //    init();
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

app.get('/tmlget', (req, res) => {
    if (req.session.userId) {
        getTimeline(req, res);
    } else {
        res.send(setStatusMessage(statusERROR, "Unauthorized access."));
    }
});

app.get('/tmlgetall', (req, res) => {
    getAllTimeline(res);
});

app.post('/timeline', (req, res) => {
    upload(req, res, err => { //correct BODY->places!!!
        if (err) {
            console.log(err);
        }
        let timelineData = {};
        if (req.file) {
            timelineData = {
                userid: req.session.userId,
                title: req.body.title,
                body: req.body.body,
                imgurl: '.' + req.file.destination + req.file.filename,
                imgsize: req.file.size
            };
        } else {
            timelineData = {
                userid: req.session.userId,
                title: req.body.title,
                body: req.body.body
            };
        }
        if (timelineData.title) {
            console.log('OK_upload');
            Timeline.create(timelineData, (err, timeline) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('OK_create');
                    res.send(setStatusMessage(statusOK, "", Timeline.getTimeline(timeline)));
                }
            });
        } else {
            res.send(setStatusMessage(statusERROR, "Title not defined."));
        }
    });
});

app.delete('/tmldelete/:tlsId', (req, res) => {
    Timeline.remove({
        '_id': Timeline.getObjectId(req.params.tlsId)
    }, err => {
        if (err) {
            console.log(err);
        } else {
            res.send(statusOK);
            console.log('OK_delete');
        }
    });
});

app.put('/tmledit/:tlId/:placeId', (req, res) => {
    upload(req, res, err => {
        if (err) {
            console.log(err);
        }
        let timelineData = {
            description: req.body.description,
            imgurl: req.file ? '.' + req.file.destination + req.file.filename : undefined
        };
        // console.log('t: ' + req.params.tlsId + ', s: ' + req.params.placeIndex);
        // console.log(req.params);
        // console.log(req.body);
        Timeline.findOneAndUpdate({
            '_id': Timeline.getObjectId(req.params.tlId),
            'places._id': Timeline.getObjectId(req.params.placeId)
        }, {
            $set: {
                "places.$.description": timelineData.description,
                "places.$.imgurl": timelineData.imgurl
            }
        }, {
            new: true,
            upsert: true
        }, (err, timeline) => {
            if (err) {
                console.log(err);
                next();
            } else {
                console.log('Timeline updated');
                res.send(setStatusMessage(statusOK, "", {
                    timeline: [Timeline.getTimeline(timeline)]
                }));
            }
        });
    });
});

app.put('/tmllikes/:tlId', (req, res) => {
    let userId = req.session.userId;

    Timeline.findById(req.params.tlId, (err, timeline) => {
        if (err) {
            console.log(err);
            res.send(setStatusMessage(statusERROR, err));
        } else {
            let ls = timeline.likes;
            let index = ls.indexOf(userId);

            if (index === -1) {
                ls.push(userId);
            } else {
                ls = ls.filter(e => !e.equals(userId));
            }
            Timeline.findByIdAndUpdate(timeline._id, {
                    $set: {
                        likes: ls
                    }
                }, {
                    fields: "likes",
                    new: true,
                    upsert: true
                },
                (err, items) => {
                    if (err) {
                        console.log(err);
                        res.send(setStatusMessage(statusERROR, err));
                    } else {
                        res.send(setStatusMessage(statusOK, "", items.likes));
                    }
                });
        }
    });
});

app.get('/city', (req, res) => {
    let param = req.query.city;

    if (param) {
        res.redirect(`/tours/${req.query.lng}/${param}`);
    } else {
        res.send(setStatusMessage(statusERROR, "City not found."));
    }
});

app.get('/tours/:lng/:city', (req, res) => {
    let lng = req.params.lng;

    Place.find({
        city: Util.getCaseInsensitive(req.params.city)
    }, (err, places) => {
        if (err || places === null || !places.length) {
            console.log(err);
            res.send(setStatusMessage(statusERROR, "", {
                message: "City not found."
            }));
        } else {
            let cityPlace = {};
            let place = places.filter(place => place.language === lng);
            if (place.length) {
                cityPlace = {
                    name: place[0].city,
                    places: place[0].places,
                    language: place[0].language
                };
            } else {
                place = places.filter(place => place.language === 'en');
                if (place.length == 1) {
                    cityPlace = {
                        name: place[0].city,
                        places: place[0].places,
                        language: place[0].language
                    };
                } else {
                    cityPlace = {
                        name: places[0].city,
                        places: places[0].places,
                        language: places[0].language
                    };
                }
            }
            res.send(setStatusMessage(statusOK, "", cityPlace));
        }
    });
});

app.get('/tours/:lng', (req, res) => {
    Place.find({
            language: req.params.lng
        },
        'city',
        (err, cities) => {
            if (err) {
                console.log(err);
                res.send(setStatusMessage(statusERROR, "", {
                    message: "Cities not found."
                }));
            } else {
                res.send(setStatusMessage(statusOK, "", cities));
            }
        });
});

app.get('/guide/:lng', (req, res) => {
    Country.find({
            language: req.params.lng
        })
        .sort({
            name: 1
        })
        .exec((err, countries) => {
            if (err) {
                console.log(err);
                res.send(setStatusMessage(statusERROR, "", {
                    message: "Countries not found."
                }));
            } else {
                res.send(setStatusMessage(statusOK, "", countries));
            }
        });
});

app.get('/routes/:action', (req, res) => {
    req.session.route = {
        title: req.query.title,
        locationid: req.query.locationid,
        languange: req.query.lng
    };
    switch (req.params.action) {
        case 'save':
            if (req.session.userId) {
                getTimeline(req, res);
            } else {
                res.send(setStatusMessage(statusERROR)); //new Error()
            }
            break;
        default:
            res.send(setStatusMessage(statusOK));
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});