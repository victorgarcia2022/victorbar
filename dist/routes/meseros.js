"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _meseros = require("../controllers/meseros");

var _auth = require("./auth");

var router = (0, _express.Router)();
router.get('/', _meseros.getMeseros);
router.get('/:id', [(0, _expressValidator.body)('id', "Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt()], _meseros.getMesero);
router.post('/', [(0, _expressValidator.body)('tipo_documento', "Debe Ingresar el tipo de documento del pedido.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('documento', "Debe Ingresar el documento.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('nombre', "Debe Ingresar el Nombre.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('usuario_id', "Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('sede_id', "Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt()], _meseros.createMesero);
router.patch('/:id', [(0, _expressValidator.body)('tipo_documento', "Debe Ingresar el tipo de documento del pedido.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('documento', "Debe Ingresar el documento.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('nombre', "Debe Ingresar el Nombre.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('usuario_id', "Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('sede_id', "Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt()], _meseros.updateMesero);
router["delete"]('/:id', _meseros.deleteMesero);
var _default = router;
exports["default"] = _default;