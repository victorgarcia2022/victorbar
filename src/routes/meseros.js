import { Router } from 'express'
import { body } from 'express-validator'
import {
    getMeseros,
    getMesero,
    createMesero,
    updateMesero,
    deleteMesero
} from '../controllers/meseros'
import { auth } from './auth'
const router = Router()

router.get('/', getMeseros);

router.get('/:id', [
  body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getMesero)

router.post('/', [
  body('tipo_documento',"Debe Ingresar el tipo de documento del pedido.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('documento',"Debe Ingresar el documento.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('nombre',"Debe Ingresar el Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('usuario_id',"Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(),
  body('sede_id',"Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt(),
], createMesero)

router.patch('/:id', [
  body('tipo_documento',"Debe Ingresar el tipo de documento del pedido.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('documento',"Debe Ingresar el documento.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('nombre',"Debe Ingresar el Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('usuario_id',"Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(),
  body('sede_id',"Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt(),
], updateMesero)

router.delete('/:id', deleteMesero)

export default router
