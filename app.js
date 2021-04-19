const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/auth/login/login');
const registerRouter = require('./routes/auth/register/register');
const adminRouter = require('./routes/manage/admin/admin');
const manageDashboardRouter = require('./routes/manage/dashboard/dashboard');
const managePortfolioRouter = require('./routes/manage/portfolio/portfolio');
const dashboardRouter = require('./routes/dashboard/dashboard');
const portfolioRouter = require('./routes/portfolio/portfolio');

// db
const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/ChampooDB';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/manage/admins', adminRouter);
app.use('/manage/dashboard', manageDashboardRouter);
app.use('/manage/portfolio', managePortfolioRouter);
app.use('/dashboard', dashboardRouter);
app.use('/portfolio', portfolioRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//connect database
mongoose.connect(dbUrl,{
    useNewUrlParser: true
});
mongoose.connection;

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
