import { Router } from 'express'
import { body } from 'express-validator'
import {
    getPedidos,
    getPedido,
    createPedido,
    updatePedido,
    deletePedido
} from '../controllers/pedidos'
import { auth } from './auth'
const router = Router()

router.get('/', getPedidos);

router.get('/:id', [
  body('id',"Debe Ingresar Un ID válido.").notEmpty().escape().trim().isInt(),
], getPedido)

router.post('/', [
  body('mesa',"Debe Ingresar Un N° de mesa Mesa.").notEmpty().escape().trim().isInt(),
  body('productos',"Debe Ingresar el Total del pedido.").notEmpty().isJSON(),
  body('total',"Debe Ingresar el Total del pedido.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('usuario_id',"Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(),
  body('sede_id',"Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt(),
], createPedido)

router.patch('/:id', [
  body('mesa',"Debe Ingresar Un N° de mesa Mesa.").notEmpty().escape().trim().isInt(),
  body('productos',"Debe Ingresar el Total del pedido.").notEmpty().isJSON(),
  body('total',"Debe Ingresar el Total del pedido.").notEmpty().escape().trim().isLength({ min: 3 }),
  body('usuario_id',"Debe Ingresar Un Usuario Válido.").notEmpty().escape().trim().isInt(),
  body('sede_id',"Debe Ingresar Una Sede Válida.").notEmpty().escape().trim().isInt(),
], updatePedido)

router.delete('/:id', deletePedido)

export default router
