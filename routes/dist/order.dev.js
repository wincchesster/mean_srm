"use strict";

var express = require('express');

var controller = require('../controllers/order');

var passport = require('passport');

var router = express.Router();
router.post('/', passport.authenticate('jwt', {
  session: false
}), controller.getAll);
router.get('/', passport.authenticate('jwt', {
  session: false
}), controller.create);
module.exports = router;