"use strict";

var Category = require('../models/Category');

var errorHandler = require('../utils/errorHandler');

var Position = require('../models/Position');

module.exports.getAll = function _callee(req, res) {
  var categories;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Category.find({
            user: req.user.id
          }));

        case 3:
          categories = _context.sent;
          res.status(200).json(categories);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          errorHandler(res, _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports.getById = function _callee2(req, res) {
  var category;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Category.findById(req.params.id));

        case 3:
          category = _context2.sent;
          res.status(200).json(category);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          errorHandler(res, _context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports.remove = function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Category.remove({
            _id: req.params.id
          }));

        case 3:
          _context3.next = 5;
          return regeneratorRuntime.awrap(Position.remove({
            category: req.params.id
          }));

        case 5:
          res.status(200).json({
            messege: "Category deleted."
          });
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          errorHandler(res, _context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports.create = function _callee4(req, res) {
  var category;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          category = new Category({
            name: req.body.name,
            user: req.user.id,
            imageSrc: req.file ? req.file.path : ''
          });
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(category.save());

        case 4:
          res.status(201).json(category);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          errorHandler(res, _context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

module.exports.update = function _callee5(req, res) {
  var updated, category;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          updated = {
            name: req.body.name
          };

          if (req.file) {
            updated.imageSrc = req.file.path;
          }

          _context5.prev = 2;
          _context5.next = 5;
          return regeneratorRuntime.awrap(Category.findOneAndUpdate({
            _id: req.params.id
          }, {
            $set: updated
          }, {
            "new": true
          }));

        case 5:
          category = _context5.sent;
          res.status(200).json(category);
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](2);
          errorHandler(res, _context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 9]]);
};