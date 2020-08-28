"use strict";

var express = require('express');

var controller = require('../controllers/analytics');

var router = express.Router();
router.get('/overview', passport.authenticate('jwt', {
  session: false
}), controller.overview);
router.get('/analytics', passport.authenticate('jwt', {
  session: false
}), controller.analytics);
module.exports = router;