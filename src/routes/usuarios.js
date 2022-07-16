import { Router } from 'express'
import { body } from 'express-validator'
import {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    loginUsuario,
    getUsuarioLogin
} from '../controllers/usuarios'
import { auth } from './auth'
const router = Router()

router.get('/', getUsuarios);

router.get('/:id', [
  body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getUsuario)

router.post('/', [
    body('email',"Debe Ingresar Un Email.").isEmail().notEmpty().escape().trim().isLength({ min: 3 }),
    body('password',"La contraseña debe tener un mínimo de 4 carácteres.").notEmpty().trim().isLength({ min: 4 }),
], createUsuario)

router.patch('/:id', [ 
  body('email',"Debe Ingresar Un Email.").isEmail().notEmpty().escape().trim().isLength({ min: 3 }),
  body('password',"La contraseña debe tener un mínimo de 4 carácteres.").notEmpty().trim().isLength({ min: 4 }),
], updateUsuario)

router.delete('/:id', deleteUsuario)

//LOGIN
router.post('/login',[
  body('email',"Debe Ingresar Un Email.").isEmail().notEmpty().escape().trim().isLength({ min: 3 }),
  body('password',"La contraseña debe tener un mínimo de 4 carácteres.").notEmpty().trim().isLength({ min: 4 }),
], loginUsuario);

//GET USER LOGIN WITH TOKEN
router.get('/get/login', getUsuarioLogin);

export default router
