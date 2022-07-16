"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

// import {
//     login
// } from '../controllers/users'
var router = (0, _express.Router)(); // iniciar el router http
// a middleware user LOGIN
// var auth = function(req, res, next) {
//     if ( req.session && req.session.user )
//         return next();
//     else
//         return res.redirect('/')
// };
//CREATE
// router.post('/login', [
//     body('name',"Debe Ingresar Un Nombre.")
//         .notEmpty()
//         .escape()
//         .trim()
//         .isLength({ min: 3 }),
//     body('age',"Edad inválida.")
//         .notEmpty()
// ], login);
// router.get('/logout', auth, function (req, res) {
// 	req.session.destroy();
// 	res.redirect('/')
// });

var _default = router;
exports["default"] = _default;