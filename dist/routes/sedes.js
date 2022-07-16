"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _sedes = require("../controllers/sedes");

var router = (0, _express.Router)();
router.get('/', _sedes.getSedes);
router.get('/:id', [(0, _expressValidator.body)('id', "Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt()], _sedes.getSede);
router.post('/', [(0, _expressValidator.body)('nombre', "Debe Ingresar el Nombre de la Sede.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('administrador', "Debe Ingresar el Administrador de la Sede.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('n_mesas', "Debe Ingresar El N° de mesas disponibles.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('usuario_id', "Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt()], _sedes.createSede);
router.patch('/:id', [(0, _expressValidator.body)('nombre', "Debe Ingresar el Nombre de la Sede.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('administrador', "Debe Ingresar el Administrador de la Sede.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('n_mesas', "Debe Ingresar El N° de mesas disponibles.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('usuario_id', "Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt()], _sedes.updateSede);
router["delete"]('/:id', _sedes.deleteSede);
var _default = router;
exports["default"] = _default;