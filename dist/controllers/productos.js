"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProducto = exports.getProductos = exports.getProducto = exports.deleteProducto = exports.createProducto = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _moment = _interopRequireDefault(require("moment"));

var _models = require("../database/models");

var getProductos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var productos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.Producto.findAll();

          case 3:
            productos = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              total: productos.length,
              productos: productos
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              mensaje: 'Internal server error',
              error: _context.t0
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getProductos(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProductos = getProductos;

var getProducto = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var producto;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.Producto.findOne({
              where: {
                id: req.params.id
              },
              raw: true
            });

          case 3:
            producto = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(producto));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              mensaje: 'Internal server error',
              error: _context2.t0
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getProducto(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProducto = getProducto;

var createProducto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var producto;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.Producto.create({
              nombre: req.body.nombre,
              valor: req.body.valor,
              imagen: req.body.imagen,
              stock: req.body.stock,
              sedeId: req.body.sedeId,
              created_at: (0, _moment["default"])(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
              updated_at: (0, _moment["default"])(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss")
            }, {
              raw: true
            });

          case 3:
            producto = _context3.sent;

            if (!producto) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(200).json({
              mensaje: 'Producto Creado Exitosamente.',
              producto: producto
            }));

          case 8:
            return _context3.abrupt("return", res.status(400).json({
              mensaje: 'Hubo un error al crear un producto.'
            }));

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              mensaje: 'Internal server error',
              error: _context3.t0
            }));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function createProducto(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createProducto = createProducto;

var updateProducto = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var producto;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models.Producto.update({
              nombre: req.body.nombre,
              valor: req.body.valor,
              imagen: req.body.imagen,
              stock: req.body.stock,
              sedeId: req.body.sedeId,
              updated_at: (0, _moment["default"])(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss")
            }, {
              where: {
                id: req.params.id
              },
              returning: true,
              raw: true
            });

          case 3:
            producto = _context4.sent;

            if (!producto) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(200).json({
              mensaje: 'Producto Actualizado Correctamente.'
            }));

          case 8:
            return _context4.abrupt("return", res.status(400).json('Ha ocurrido un error inesperado.'));

          case 9:
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              mensaje: 'Internal server error',
              error: _context4.t0
            }));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function updateProducto(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProducto = updateProducto;

var deleteProducto = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var producto;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _models.Producto.destroy({
              where: {
                id: req.params.id
              }
            });

          case 3:
            producto = _context5.sent;

            if (!producto) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(200).json({
              mensaje: 'Producto eliminado exitosamente.'
            }));

          case 8:
            return _context5.abrupt("return", res.status(400).json({
              error: "El id: ".concat(req.params.id, " no existe.")
            }));

          case 9:
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).json({
              mensaje: 'Internal server error',
              error: _context5.t0
            }));

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function deleteProducto(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProducto = deleteProducto;