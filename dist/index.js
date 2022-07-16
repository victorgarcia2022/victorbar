"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _dotenv = require("dotenv");

var _usuarios = _interopRequireDefault(require("./routes/usuarios"));

var _sedes = _interopRequireDefault(require("./routes/sedes"));

var _meseros = _interopRequireDefault(require("./routes/meseros"));

var _productos = _interopRequireDefault(require("./routes/productos"));

var _pedidos = _interopRequireDefault(require("./routes/pedidos"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

// Libreria pare lectura de RUTAS HTTP
// libreria para log de peticiones HTTP
// Libreria para manejo de sesiones en nodejs
// importar configuracion de archivo .env
// rutas gestion de usuarios
// rutas gestion de sedes
// rutas gestion de meseros
// rutas gestion de productos
// rutas gestion de pedidos
// leer envio de formularios
//DOTENV PARA LEER VARIABLES GLOBALES .ENV
(0, _dotenv.config)();
var app = (0, _express["default"])();
app.set('port', process.env.APP_PORT); //ver peticion que van llegando por consola

app.use((0, _morgan["default"])('dev'));
app.use((0, _expressSession["default"])({
  secret: '123456',
  resave: true,
  saveUninitialized: true
}));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); //usar rutas

app.use('/api/usuarios', _usuarios["default"]);
app.use('/api/sedes', _sedes["default"]);
app.use('/api/meseros', _meseros["default"]);
app.use('/api/productos', _productos["default"]);
app.use('/api/pedidos', _pedidos["default"]); //Levantar servidor

app.listen(app.get('port'), function () {
  console.log('Server iniciado en puerto: ' + app.get('port'));
});
var _default = app;
exports["default"] = _default;