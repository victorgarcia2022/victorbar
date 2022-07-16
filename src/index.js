import express from 'express' // Libreria pare lectura de RUTAS HTTP
import morgan from 'morgan' // libreria para log de peticiones HTTP
import session from 'express-session' // Libreria para manejo de sesiones en nodejs
import { config as dotenv } from "dotenv" // importar configuracion de archivo .env
import usuariosRoutes from './routes/usuarios' // rutas gestion de usuarios
import sedesRoutes from './routes/sedes' // rutas gestion de sedes
import meserosRoutes from './routes/meseros' // rutas gestion de meseros
import productosRoutes from './routes/productos' // rutas gestion de productos
import pedidosRoutes from './routes/pedidos' // rutas gestion de pedidos
import bodyParser from 'body-parser' // leer envio de formularios

//DOTENV PARA LEER VARIABLES GLOBALES .ENV
dotenv()

const app = express()

app.set('port', process.env.APP_PORT)

//ver peticion que van llegando por consola
app.use(morgan('dev'))
app.use( session({secret: '123456', resave: true, saveUninitialized: true}) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//usar rutas
app.use('/api/usuarios', usuariosRoutes)
app.use('/api/sedes', sedesRoutes)
app.use('/api/meseros', meserosRoutes)
app.use('/api/productos', productosRoutes)
app.use('/api/pedidos', pedidosRoutes)

//Levantar servidor
app.listen(app.get('port'), () => {
	console.log('Server iniciado en puerto: '+app.get('port'))
})

export default app