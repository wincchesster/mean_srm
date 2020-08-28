"use strict";

var multer = require('multer');

var moment = require('moment');

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function filename(req, file, cb) {
    var date = moment().format('DDMMYYYY-HHmmss_SSS');
    cb(null, "".concat(date, "-").concat(file.originalname));
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var limits = {
  fileSize: 1024 * 1024 * 5
};
module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits
});