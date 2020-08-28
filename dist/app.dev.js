"use strict";

var express = require('express');

var passport = require('passport');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var cors = require('cors');

var morgan = require('morgan');

var authRoutes = require('./routes/auth');

var analyticsRoutes = require('./routes/analytics');

var categoryRoutes = require('./routes/category');

var orderRoutes = require('./routes/order');

var positionRoutes = require('./routes/position');

var keys = require('./config/keys');

var _require = require('mongoose'),
    Mongoose = _require.Mongoose;

var app = express();
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(keys.mongoURI).then(function () {
  return console.log('MongoDB conncted.');
})["catch"](function (error) {
  return console.log(error);
});
app.use(passport.initialize());

require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use('/uploads', express["static"]('uploads'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);
module.exports = app;