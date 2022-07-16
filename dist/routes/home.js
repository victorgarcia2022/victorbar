"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expressValidator = require("express-validator");

var router = (0, _express.Router)(); // iniciar el router http

router.get('/', function (req, res) {
  res.render('pages/home.ejs');
});
var _default = router;
exports["default"] = _default;