"use strict";

var express = require('express');

var controller = require('../controllers/position');

var router = express.Router();
router.get('/:categoryId', passport.authenticate('jwt', {
  session: false
}), controller.getByCategoryId);
router.post('/', passport.authenticate('jwt', {
  session: false
}), controller.create);
router.patch('/:id', passport.authenticate('jwt', {
  session: false
}), controller.uodate);
router["delete"]('/:id', passport.authenticate('jwt', {
  session: false
}), controller.remove);
module.exports = router;