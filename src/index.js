import express from 'express' // Libreria pare lectura de RUTAS HTTP
import morgan from 'morgan' // libreria para log de peticiones HTTP
import bodyParser from 'body-parser' // leer envio de formularios
import cors from 'cors' // leer envio de formularios

import { config as dotenv } from "dotenv" // importar configuracion de archivo .env
import usuariosRoutes from './routes/usuarios' // rutas gestion de usuarios
import sedesRoutes from './routes/sedes' // rutas gestion de sedes
import meserosRoutes from './routes/meseros' // rutas gestion de meseros
import productosRoutes from './routes/productos' // rutas gestion de productos
import pedidosRoutes from './routes/pedidos' // rutas gestion de pedidos

//DOTENV PARA LEER VARIABLES GLOBALES .ENV
dotenv()

const app = express()

app.set('port', process.env.APP_PORT)

//ver peticion que van llegando por consola
app.use(morgan('dev'))
//permitir json en body
app.use(bodyParser.json());
//permitir urls
app.use(bodyParser.urlencoded({ extended: false }));
//CORS , acepta todas las peticiones de la direccion localhost:5000
const whiteList = ['http://localhost:5000', 'http://localhost:8100']
app.use(cors({ origin: whiteList }))

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