"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var _pedidos = require("../controllers/pedidos");

var _auth = require("./auth");

var router = (0, _express.Router)();
router.get('/', _pedidos.getPedidos);
router.get('/:id', [(0, _expressValidator.body)('id', "Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt()], _pedidos.getPedido);
router.post('/', [(0, _expressValidator.body)('mesa', "Debe Ingresar Un N° de mesa Mesa.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('productos', "Debe Ingresar el Total del pedido.").notEmpty().isJSON(), (0, _expressValidator.body)('total', "Debe Ingresar el Total del pedido.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('usuario_id', "Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('sede_id', "Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt()], _pedidos.createPedido);
router.patch('/:id', [(0, _expressValidator.body)('mesa', "Debe Ingresar Un N° de mesa Mesa.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('productos', "Debe Ingresar el Total del pedido.").notEmpty().isJSON(), (0, _expressValidator.body)('total', "Debe Ingresar el Total del pedido.").notEmpty().escape().trim().isLength({
  min: 3
}), (0, _expressValidator.body)('usuario_id', "Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(), (0, _expressValidator.body)('sede_id', "Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt()], _pedidos.updatePedido);
router["delete"]('/:id', _pedidos.deletePedido);
var _default = router;
exports["default"] = _default;