/*global require*/
/*eslint-disable no-console */
/*jslint maxerr: 10, es6, node, single, for, bitwise, multivar, white, this, browser*/
'use strict';

const express = require('express');
//var router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        "use strict";
        cb(null, './blog/img/');
    },
    filename: function (req, file, cb) {
        "use strict";
        cb(null, file.fieldname + '-' + Date.now()+ '.' + file.originalname.split('.').pop());
    }
});
const upload = multer({storage: storage}).single('pic');
const passport = require('passport');

const port = 3000;
//http://expressjs.com/ru/guide/routing.html
//https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619
//var express = require('express'),
//    app = express(),
const statusOK = {status: 'OK'};
const statusERROR = {status: 'ERROR'};
const User = require('./server/db/user');
const Timeline = require('./server/db/blog');
const Place = require('./server/db/place');
const Country = require('./server/db/country');
//var pathoptions = 'en/';//??

var getCaseInsensitive = (value) => new RegExp(`^${value}$`, 'i');

//app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/css', express.static('css'));
app.use('/fontawesome', express.static('fontawesome'));
//app.use('/fontawesome/css', express.static('font-awesome/css'));
//app.use('/fontawesome/fonts', express.static('font-awesome/fonts'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));
app.use('/bootstrap/css', express.static('bootstrap/css'));
app.use('/bootstrap/js', express.static('bootstrap/js'));
app.use('/en', express.static('en'));
app.use('/ua', express.static('ua'));
//app.use('/blog', express.static('blog'));
app.use(express.static(__dirname + '/en'));//??
app.use(session({
    secret: 'e2t',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
  });
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
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
    let locations = req.session.locations;
    console.log(locations);
    let t = {};

    if (locations) {
        //save to mongo
        delete req.session.locations;
    }//only on profile html?
    Timeline.find({'userid': req.session.userId}, function (err, timeline) {
        t = [{
            id: req.session.userId,
            userid: req.session.userId,
            title: "Vienna",
            locations: [[48.1861987, 16.3128606], [48.2076579, 16.3638598]],
            body: [{
                title: "Vienna",
                description: "vv",
                imgurl: "/img/trips/cities/hofburg.jpg",
                imgsize: 1
                },
                {
                    title: "Kiev",
                    description: "aa",
                    imgurl: "/img/trips/cities/hofburg.jpg",
                    imgsize: 1
                }
            ],
            comments: ["qq", "cc", "ww"],
            created_at: t.created_at,
            updated_at: t.updated_at
        }];
        if (err) {
            console.log(err);
            res.send(setStatusMessage(statusOK, "", {
                sessionId: req.session.userId,
                username: req.session.username}));
        } else {
            res.send(setStatusMessage(statusOK, "", {
                sessionId: req.session.userId,
                username: req.session.username,
                timeline: t}));
                // sessionId: req.session.userId,
                // username: req.session.username,
                // timeline: Timeline.getTimeline(timeline)}));
        }
    });
}

function getError(err) {
    switch (err.code) {
        case 11000 :
            return "This name or email already exists.";
        default :
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
        $or: [{'username': userData.username},
             {'email': userData.username}]},
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

function validateEmail(email) {
    return /^\w+([\-]?\w+)*@\w+([\-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function validate(userData) {
    if (!userData.username) {
        setStatusMessage(statusERROR, "Name can't be empty.");
        return false;
    }
    if (!validateEmail(userData.email)) {
        setStatusMessage(statusERROR, "Invalid email address.");
        return false;
    }
    if (!userData.password) {
        setStatusMessage(statusERROR, "Password can't be empty.");
        return false;
    } if (userData.password !== userData.repassword) {
        setStatusMessage(statusERROR, "Passwords don't match.");
        return false;
    }

    return true;
}

function createUser(userData, req, res) {
    User.create(userData, function (err, user) {
        if (err) {
            res.send(setStatusMessage(statusERROR, getError(err)));
        } else {
            req.session.userId = user._id;
            req.session.username = user.username;
            res.send(setStatusMessage(statusOK, "", user));
        }
    });
}

app.get('/', function(req, res) {
//    req.flash('message', 'Invalid Password');
	console.log(__dirname);
//	res.sendFile('index.html', pathoptions);
//	res.sendFile('index.html');
	res.sendFile(path.join(__dirname + '/en/index.html'), function(err) {
//	   res.sendFile(path.join(__dirname + '/en/404.html'));
//        res.redirect('/en/404.html');
        console.log(err);
    });
//	res.sendFile(path.join(__dirname, 'en', 'index.html'));
});
//res.sendFile('index1.html', { root: path.join(__dirname, //'../public') });

app.get('/isloggedin', function(req, res) {
	console.log('[' + new Date() + ']: sessionId => ' + req.session.userId);
//    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
//    console.log(fullUrl);
//'/foo/bar/baz/asdf/quux.html'.split('/').pop()    
//     res.locals.current_path= req.path
//    console.log(req.path);
    if (req.session.userId) {
        getTimeline(req, res);
    }
});

app.get('/profile', function(req, res) {
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
	res.sendFile(path.join(__dirname + '/en/404.html'), function(err) {
        console.log(err);
//        res.end();
    });
//    res.send(statusOK);
//	res.sendFile(path.join(__dirname, 'en', 'profile.html'));
});

app.post('/login', function(req, res) {
    var userData = {
        username: req.body.username,
        password: req.body.password
    };    
//    init();
    getUser(userData, req, res);
});

app.post('/register', function(req, res) {
    var userData = {
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

app.get('/logout', function(req, res, next) {
//    init();
    if (req.session) {
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

app.post('/timeline', function(req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
        }
        var timelineData = {};
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
            Timeline.create(timelineData, function (err, timeline) {
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

app.delete('/tmldelete/:tlsId', function(req, res) {
    Timeline.remove({'_id': Timeline.getObjectId(req.params.tlsId)}, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send(statusOK);
            console.log('OK_delete');
        }
    });
});

app.put('/tmledit/:tlsId', function(req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
        }
        var timelineData = {};
        if (req.file) {
            timelineData = {
                title: req.body.title,
                body: req.body.body,
                imgurl: '.' + req.file.destination + req.file.filename,
                imgsize: req.file.size
            };
        } else {
            timelineData = {
                title: req.body.title,
                body: req.body.body,
                imgurl: undefined,
                imgsize: 0
            };
        }
        if (timelineData.title) {
            Timeline.findOneAndUpdate({'_id': Timeline.getObjectId(req.params.tlsId)}, timelineData, {new: true}, function (err, timeline) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('OK_updated');
                    res.send(setStatusMessage(statusOK, "", Timeline.getTimeline(timeline)));
                }
            });
        } else {
            res.send(setStatusMessage(statusERROR, "Title not defined."));
        }
    });
});

app.get('/city', (req, res) => {
    var param = req.query.city;

    if (param) {
        res.redirect(`/tours/${req.query.lng}/${param}`);
    } else {
        res.send(setStatusMessage(statusERROR, "City not found."));
    }
});

app.get('/tours/:lng/:city', (req, res) => {
    let lng = req.params.lng;

    Place.find({
            city: getCaseInsensitive(req.params.city)
        }, (err, places) => {
        if (err || places === null || !places.length) {
            console.log(err);
            res.send(setStatusMessage(statusERROR, "", {message: "City not found."}));
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
            // users will be documents with age>1 and further filtered by query sent as query params from FE 
            //res.status(200).json(users);
            res.send(setStatusMessage(statusOK, "", cityPlace));
        }
    });
});

app.get('/routes', (req, res) => {
    req.session.locations = req.query.locations;
    req.session.languange = req.query.lng;
    // console.log(param);
    // if (param) {
    //     res.redirect(`/tours/${req.query.lng}/${param}`);
    // } else {
    res.send(setStatusMessage(statusOK));
    // }
});