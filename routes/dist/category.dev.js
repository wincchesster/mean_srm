"use strict";

var express = require('express');

var controller = require('../controllers/category');

var passport = require('passport');

var upload = require('../middleware/upload');

var router = express.Router();
router.get('/', passport.authenticate('jwt', {
  session: false
}), controller.getAll);
router.get('/:id', passport.authenticate('jwt', {
  session: false
}), controller.getById);
router["delete"]('/:id', passport.authenticate('jwt', {
  session: false
}), controller.remove);
router.post('/', passport.authenticate('jwt', {
  session: false
}), upload.single('image'), controller.create);
router.post('/:id', passport.authenticate('jwt', {
  session: false
}), upload.single('image'), controller.update);
module.exports = router;