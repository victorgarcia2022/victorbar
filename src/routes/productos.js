import { Router } from 'express'
import { body } from 'express-validator'
import {
    getProductos,
    getProducto,
    createProducto,
    updateProducto,
    deleteProducto
} from '../controllers/productos'
import { auth } from './auth'
const router = Router()

router.get('/', getProductos);

router.get('/:id', [
  body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getProducto)

router.post('/', [
  body('nombre',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('valor',"Debe Ingresar Un Valor.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('imagen',"Debe Ingresar Una Imagen.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('stock',"Debe Ingresar Un Stock.").notEmpty().escape().trim().isInt(),
  body('sede_id',"Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt(),
], createProducto)

router.patch('/:id', [ 
  body('nombre',"Debe Ingresar Un Nombre.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('valor',"Debe Ingresar Un Valor.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('imagen',"Debe Ingresar Una Imagen.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('stock',"Debe Ingresar Un Stock.").notEmpty().escape().trim().isInt(),
  body('sede_id',"Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt(),
], updateProducto)

router.delete('/:id', deleteProducto)

export default router
