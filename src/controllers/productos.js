import moment from 'moment'
import { Producto } from '../database/models'

export const getProductos = async(req, res, next) => {
		try{
				const productos = await Producto.findAll()
				return res.status(200).json({
					total: productos.length,
					productos
				});
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const getProducto = async(req, res, next) => {
		try{
				const producto = await Producto.findOne({
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

export const createProducto = async(req, res, next) => {
		try{
				const producto = await Producto.create({ 
          nombre:            req.body.nombre,
          valor:             req.body.valor,
          imagen:            req.body.imagen,
          stock:             req.body.stock,
          sede_id:            req.body.sede_id,
					created_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
					updated_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
				},
				{
					raw: true 
				});
				if( producto ){
					return res.status(200).json({
						mensaje: 'Producto Creado Exitosamente.',
						producto
					});
				}else{
					return res.status(400).json({
						mensaje: 'Hubo un error al crear un producto.'
					});
				}

		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const updateProducto = async(req, res, next) => {
		try{

				const producto = await Producto.update({ 
          nombre:            req.body.nombre,
          valor:             req.body.valor,
          imagen:            req.body.imagen,
          stock:            req.body.stock,
          sede_id:            req.body.sede_id,
          updated_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
				},
				{ 
				  where : { id: req.params.id },
					returning: true,
					raw: true
        }
				)
				if( producto ){
					return res.status(200).json({
						mensaje: 'Producto Actualizado Correctamente.'
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

export const deleteProducto = async(req, res, next) => {
		try{
			const producto = await Producto.destroy({ 
					where: { id: req.params.id }
			})
			if( producto ){
				return res.status(200).json({
					mensaje: 'Producto eliminado exitosamente.'
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