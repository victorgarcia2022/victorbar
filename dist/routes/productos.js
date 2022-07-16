"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _productos = require("../controllers/productos");

var _auth = require("./auth");

var router = (0, _express.Router)();
router.get('/', _productos.getProductos);
router.get('/:id', [(0, _expressValidator.body)('id', "Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt()], _productos.getProducto);
router.post('/', [(0, _expressValidator.body)('nombre', "Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('valor', "Debe Ingresar Un Valor.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('imagen', "Debe Ingresar Una Imagen.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('stock', "Debe Ingresar Un Stock.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('sede_id', "Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt()], _productos.createProducto);
router.patch('/:id', [(0, _expressValidator.body)('nombre', "Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('valor', "Debe Ingresar Un Valor.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('imagen', "Debe Ingresar Una Imagen.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('stock', "Debe Ingresar Un Stock.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('sede_id', "Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt()], _productos.updateProducto);
router["delete"]('/:id', _productos.deleteProducto);
var _default = router;
exports["default"] = _default;