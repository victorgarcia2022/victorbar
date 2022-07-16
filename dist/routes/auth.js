"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var auth = function auth(req, res, next) {
  if (req.session && req.session.user) return next();else return res.status(422).json({
    message: "Usuario no Loggeado"
  });
};

exports.auth = auth;