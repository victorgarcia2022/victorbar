import moment from 'moment'
import { Pedido } from '../database/models'

export const getPedidos = async(req, res, next) => {
		try{
				const pedidos = await Pedido.findAll()
				return res.status(200).json({
					total: pedidos.length,
					pedidos
				});
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const getPedido = async(req, res, next) => {
		try{
				const pedido = await Pedido.findOne({
					where: { id: req.params.id },
					raw: true 
				});
				return res.status(200).json(producto);
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const createPedido = async(req, res, next) => {
	console.log(req.body)
		try{
			conosle.log(req.body)
				const pedido = await Pedido.create({ 
          mesa:              req.body.mesa,
          productos:         req.body.productos,
          total:             req.body.total,
          usuario_id:         req.body.usuario_id,
          sede_id:            req.body.sede_id,
					created_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
					updated_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
				},
				{
					raw: true 
				});
				if( pedido ){
					return res.status(200).json({
						mensaje: 'Pedido Creado Exitosamente.',
						pedido
					});
				}else{
					console.log(pedido)
					return res.status(400).json({
						mensaje: 'Hubo un error al crear un pedido.'
					});
				}

		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const updatePedido = async(req, res, next) => {
		try{

				const pedido = await Pedido.update({ 
          mesa:              req.body.mesa,
          productos:         req.body.productos,
          total:             req.body.total,
          usuario_id:         req.body.usuario_id,
          sede_id:            req.body.sede_id,
          updated_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
				},
				{ 
				  where : { id: req.params.id },
					returning: true,
					raw: true
        }
				)
				if( pedido ){
					return res.status(200).json({
						mensaje: 'Pedido Actualizado Correctamente.'
					});
				}else{
					return res.status(400).json('Ha ocurrido un error inesperado.');
				}
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const deletePedido = async(req, res, next) => {
		try{
			const pedido = await Pedido.destroy({ 
					where: { id: req.params.id }
			})
			if( pedido ){
				return res.status(200).json({
					mensaje: 'Pedido eliminado exitosamente.'
				});
			}else{
				return res.status(400).json({
					error: `El id: ${req.params.id} no existe.`
				});
			}
			
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}