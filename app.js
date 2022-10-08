/*require('dotenv').config()*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const session = require("express-session");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/productsRouter')
var usersRouter = require('./routes/usersRouter');
const localsMiddleware = require("./middleware/localsMiddle");
const recordameMiddleware = require("./middleware/recordameMiddle");

var app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views'), ('views', path.join(__dirname, 'views/users/')), ('views', path.join(__dirname, 'views/products/'))]);
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "Secreto",
  resave: false,
  saveUninitialized: true
}));
app.use(recordameMiddleware);
app.use(localsMiddleware);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));
app.set('puerto', process.env.PORT || 3030);
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
  res.render('error');
});


module.exports = app;
