import { Router } from 'express'
import { body } from 'express-validator'
import {
    getSedes,
    getSede,
    createSede,
    updateSede,
    deleteSede
} from '../controllers/sedes'
const router = Router()

router.get('/', getSedes);

router.get('/:id', [
  body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getSede)

router.post('/', [
  body('nombre',"Debe Ingresar el Nombre de la Sede.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('administrador',"Debe Ingresar el Administrador de la Sede.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('n_mesas',"Debe Ingresar El N° de mesas disponibles.").notEmpty().escape().trim().isInt(),
  body('usuario_id',"Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(),
], createSede)

router.patch('/:id', [
  body('nombre',"Debe Ingresar el Nombre de la Sede.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('administrador',"Debe Ingresar el Administrador de la Sede.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('n_mesas',"Debe Ingresar El N° de mesas disponibles.").notEmpty().escape().trim().isInt(),
  body('usuario_id',"Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(),
], updateSede)

router.delete('/:id', deleteSede)

export default router
