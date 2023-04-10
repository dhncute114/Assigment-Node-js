var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apirouter = require('./routes/api');
var usersRouter = require('./routes/users');
var sanphamRouter = require('./routes/sanpham');
var taikhoanRouter = require('./routes/taikhoan');
var quanlytkRouter = require('./routes/quanlytk')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'dsfsdfsdfsdfsdf',
  resave: false,
  saveUninitialized: true,
}))
app.use('/', taikhoanRouter);
app.use('/users', usersRouter);
app.use('/sanpham', sanphamRouter)
app.use('/taikhoan', quanlytkRouter)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api', apirouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (req.originalUrl.indexOf('/api') == 0) {
    res.json({
      status: 0,
      msg: err.messages
    })
  } else {
    res.render('error');
  }
});

module.exports = app;
