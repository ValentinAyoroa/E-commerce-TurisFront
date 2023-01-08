/* require('dotenv').config() */
require('dotenv').config(); // para que funcione las variables de entorno
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');
const carritoRouter = require('./routes/carritoRouter');
const apiRouter = require('./routes/apiRouter');

const localsMiddleware = require('./middleware/localsMiddle');
const recordameMiddleware = require('./middleware/recordameMiddle');

const app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views'), ('views', path.join(__dirname, 'views/users/')), ('views', path.join(__dirname, 'views/products/'))]);
app.set('view engine', 'ejs');

app.use(cors());
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'Secreto',
  resave: false,
  saveUninitialized: true
}));
app.use(recordameMiddleware);
app.use(localsMiddleware);

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/carrito', carritoRouter);

// Rutas API para Dashboard en React
app.use('/api', apiRouter);

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
