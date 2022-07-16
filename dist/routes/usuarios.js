"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _usuarios = require("../controllers/usuarios");

var _auth = require("./auth");

var router = (0, _express.Router)();
router.get('/', _usuarios.getUsuarios);
router.get('/:id', [(0, _expressValidator.body)('id', "Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt()], _usuarios.getUsuario);
router.post('/', [(0, _expressValidator.body)('email', "Debe Ingresar Un Email.").isEmail().notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('password', "La contraseña debe tener un mínimo de 4 carácteres.").notEmpty().trim().isLength({
  min: 4
})], _usuarios.createUsuario);
router.patch('/:id', [(0, _expressValidator.body)('email', "Debe Ingresar Un Email.").isEmail().notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('password', "La contraseña debe tener un mínimo de 4 carácteres.").notEmpty().trim().isLength({
  min: 4
})], _usuarios.updateUsuario);
router["delete"]('/:id', _usuarios.deleteUsuario); //LOGIN

router.post('/login', [(0, _expressValidator.body)('email', "Debe Ingresar Un Email.").isEmail().notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('password', "La contraseña debe tener un mínimo de 4 carácteres.").notEmpty().trim().isLength({
  min: 4
})], _usuarios.loginUsuario); //GET USER LOGIN WITH TOKEN

router.get('/get/login', _usuarios.getUsuarioLogin);
var _default = router;
exports["default"] = _default;