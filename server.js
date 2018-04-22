/*global require*/
/*eslint-disable no-console */
/*jslint maxerr: 10, es6, node, single, for, bitwise, multivar, white, this, browser*/

var express = require('express');
//var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        "use strict";
        cb(null, './blog/img/');
    },
    filename: function (req, file, cb) {
        "use strict";
        cb(null, file.fieldname + '-' + Date.now()+ '.' + file.originalname.split('.').pop());
    }
});
var upload = multer({storage: storage}).single('pic');
var passport = require('passport');

var port = 3000;
//http://expressjs.com/ru/guide/routing.html
//https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619
//var express = require('express'),
//    app = express(),
//    session = require('express-session');
var statusOK = {status: 'OK'};
var statusERROR = {status: 'ERROR'};
var User = require('./server/db/user');
var Timeline = require('./server/db/blog');
var Place = require('./server/db/place');
var Country = require('./server/db/country');
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
    "use strict";
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    "use strict";
    User.findById(id, function(err, user) {
        done(err, user);
  });
});

app.listen(port, function () {
    "use strict";
    console.log('Listening on port ' + port);
});


function setStatusMessage(status, msg, data) {
    "use strict";
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
    "use strict";
    Timeline.find({'userid': req.session.userId}, function (err, timeline) {
        if (err) {
            console.log(err);
            res.send(setStatusMessage(statusOK, "", {
                sessionId: req.session.userId,
                username: req.session.username}));
        } else {
            res.send(setStatusMessage(statusOK, "", {
                sessionId: req.session.userId,
                username: req.session.username,
                timeline: Timeline.getTimeline(timeline)}));
        }
    });
}

function getError(err) {
    "use strict";
    switch (err.code) {
        case 11000 :
            return "This name or email already exists.";
        default :
            return err.message;
    }
}

function getUser(userData, req, res) {
    "use strict";
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
    "use strict";
    setStatusMessage(statusOK);
    setStatusMessage(statusERROR);
}

function validateEmail(email) {
    "use strict";
    return /^\w+([\-]?\w+)*@\w+([\-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function validate(userData) {
    "use strict";
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
    "use strict";
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
    "use strict";
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
    "use strict";
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
    "use strict";
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
    "use strict";
    var userData = {
        username: req.body.username,
        password: req.body.password
    };    
//    init();
    getUser(userData, req, res);
});

app.post('/register', function(req, res) {
    "use strict";
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
    "use strict";
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
    "use strict";
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
    "use strict";
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
    "use strict";
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
    "use strict";
    var param = req.query.city;

    if (param) {
        res.redirect(`/tours/${req.query.lng}/${param}`);
    } else {
        res.send(setStatusMessage(statusERROR, "City not found."));
    }
});

app.get('/tours/:lng/:city', (req, res) => {
    "use strict";
    let lng = req.params.lng;

    Place.find({
            city: getCaseInsensitive(req.params.city)
        }, (err, places) => {
        if (err || places === null) {
            console.log(err);
            res.send(setStatusMessage(statusERROR, "", {message: "City not found."}));
        } else {
            let cityPlace = {};
            let place = places.filter(place => place.language === lng);
            if (place.length == 1) {
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