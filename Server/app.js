var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

var account = require('./routes/account');
var home = require('./routes/home');
var dc = require('./routes/dc');
var search = require('./routes/search');
var send = require('./routes/send');
var show = require('./routes/show');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/account', account);
app.use('/home', home);
app.use('/dc', dc);
app.use('/search', search);
app.use('/send', send);
app.use('/show', show);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

router.get('/', function (req, res) {
    res.send('Server is alive');
});

module.exports = app;
http.createServer(app).listen(3000, function () {
    console.log('Server port is 3000');
});
