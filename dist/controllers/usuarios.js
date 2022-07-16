"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUsuario = exports.loginUsuario = exports.getUsuarios = exports.getUsuarioLogin = exports.getUsuario = exports.deleteUsuario = exports.createUsuario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _expressValidator = require("express-validator");

var _moment = _interopRequireDefault(require("moment"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = require("../database/models");

var getUsuarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var usuarios;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.Usuario.findAll();

          case 3:
            usuarios = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              total: usuarios.length,
              usuarios: usuarios
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

  return function getUsuarios(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsuarios = getUsuarios;

var getUsuario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var usuario;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.Usuario.findOne({
              where: {
                id: req.params.id
              },
              raw: true
            });

          case 3:
            usuario = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(usuario));

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

  return function getUsuario(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsuario = getUsuario;

var createUsuario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var hashPass, usuario;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _bcryptjs["default"].hash(req.body.password, 12);

          case 3:
            hashPass = _context3.sent;
            _context3.next = 6;
            return _models.Usuario.create({
              email: req.body.email,
              password: hashPass,
              created_at: (0, _moment["default"])(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
              updated_at: (0, _moment["default"])(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss")
            }, {
              raw: true
            });

          case 6:
            usuario = _context3.sent;

            if (!usuario) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", res.status(200).json({
              mensaje: 'Usuario Creado Exitosamente.',
              usuario: usuario
            }));

          case 11:
            return _context3.abrupt("return", res.status(400).json({
              mensaje: 'Hubo un error al crear un usuario.'
            }));

          case 12:
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              mensaje: 'Internal server error',
              error: _context3.t0
            }));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 14]]);
  }));

  return function createUsuario(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createUsuario = createUsuario;

var updateUsuario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var hashPass, usuario;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _bcryptjs["default"].hash(req.body.password, 12);

          case 3:
            hashPass = _context4.sent;
            _context4.next = 6;
            return _models.Usuario.update({
              email: req.body.email,
              password: hashPass,
              updated_at: (0, _moment["default"])(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss")
            }, {
              where: {
                id: req.params.id
              },
              returning: true,
              raw: true
            });

          case 6:
            usuario = _context4.sent;

            if (!usuario) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", res.status(200).json({
              mensaje: 'Usuario Actualizado Correctamente.'
            }));

          case 11:
            return _context4.abrupt("return", res.status(400).json('Ha ocurrido un error inesperado.'));

          case 12:
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).json({
              mensaje: 'Internal server error',
              error: _context4.t0
            }));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));

  return function updateUsuario(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUsuario = updateUsuario;

var deleteUsuario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var usuario;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _models.Usuario.destroy({
              where: {
                id: req.params.id
              }
            });

          case 3:
            usuario = _context5.sent;

            if (!usuario) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(200).json({
              mensaje: 'Usuario eliminado exitosamente.'
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

  return function deleteUsuario(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}(); //LOGIN POST


exports.deleteUsuario = deleteUsuario;

var loginUsuario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var errors, usuario, passMatch, theToken;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            errors = (0, _expressValidator.validationResult)(req);

            if (errors.isEmpty()) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", res.status(422).json({
              errors: errors.array()
            }));

          case 3:
            _context6.prev = 3;
            _context6.next = 6;
            return _models.Usuario.findOne({
              where: {
                email: req.body.email
              },
              raw: true
            });

          case 6:
            usuario = _context6.sent;

            if (!(usuario.email != req.body.email)) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.status(422).json({
              mensaje: "Email Inválido"
            }));

          case 9:
            _context6.next = 11;
            return _bcryptjs["default"].compare(req.body.password, usuario.password);

          case 11:
            passMatch = _context6.sent;

            if (passMatch) {
              _context6.next = 14;
              break;
            }

            return _context6.abrupt("return", res.status(422).json({
              mensaje: "Contraseña Incorrecta"
            }));

          case 14:
            theToken = _jsonwebtoken["default"].sign({
              id: usuario.id
            }, 'the-super-strong-secrect', {
              expiresIn: '24h'
            });
            return _context6.abrupt("return", res.json({
              usuario: usuario,
              token: theToken
            }));

          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](3);
            return _context6.abrupt("return", res.status(500).json({
              mensaje: 'Internal server error',
              error: _context6.t0
            }));

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 18]]);
  }));

  return function loginUsuario(_x16, _x17) {
    return _ref6.apply(this, arguments);
  };
}(); //GET USER LOGIN WITH TOKEN


exports.loginUsuario = loginUsuario;

var getUsuarioLogin = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var theToken, decoded, usuario;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!(!req.headers.authorization || !req.headers.authorization.startsWith('Bearer') || !req.headers.authorization.split(' ')[1])) {
              _context7.next = 2;
              break;
            }

            return _context7.abrupt("return", res.status(422).json({
              mensaje: "No se validó el token"
            }));

          case 2:
            theToken = req.headers.authorization.split(' ')[1];
            decoded = _jsonwebtoken["default"].verify(theToken, 'the-super-strong-secrect');
            _context7.next = 6;
            return _models.Usuario.findOne({
              where: {
                id: decoded.id
              },
              raw: true
            });

          case 6:
            usuario = _context7.sent;

            if (!(usuario.id > 0)) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", res.json({
              mensaje: 'Usuaro Loggeado',
              usuario: usuario
            }));

          case 9:
            res.json({
              mensaje: "Usuario No Encontrado"
            });

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getUsuarioLogin(_x18, _x19, _x20) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getUsuarioLogin = getUsuarioLogin;