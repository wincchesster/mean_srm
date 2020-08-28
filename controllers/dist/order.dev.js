"use strict";

var Order = require('../models/Order');

var errorHandler = require('../utils/errorHandler');

var _require = require('express'),
    query = _require.query;

module.exports.getAll = function _callee(req, res) {
  var query, orders;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = {
            user: req.user.id
          }; //Start Date

          if (req.query.start) {
            query.date = {
              $gte: req.query.start
            };
          }

          if (req.query.end) {
            if (!query.date) {
              query.date = {};
            }

            query.date['$lte'] = req.query.end;
          }

          if (req.query.order) {
            query.order = +req.query.order;
          }

          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(Order.find(query).sort({
            date: -1
          }).skip(+req.query.offset).limit(+req.query.limit));

        case 7:
          orders = _context.sent;
          res.status(200).json(orders);
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          errorHandler(res, _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 11]]);
};

module.exports.create = function _callee2(req, res) {
  var lastOrder, maxOrder, order;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Order.findOne({
            user: req.user.id
          }).sort({
            date: -1
          }));

        case 3:
          lastOrder = _context2.sent;
          maxOrder = lastOrder ? lastOrder.order : 0;
          _context2.next = 7;
          return regeneratorRuntime.awrap(new Order({
            list: req.body.list,
            user: req.user.id,
            order: maxOrder + 1
          }).save());

        case 7:
          order = _context2.sent;
          res.status(200).json(order);
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          errorHandler(res, _context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};