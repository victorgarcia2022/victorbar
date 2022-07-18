import moment from 'moment'
import { Mesero } from '../database/models'

export const getMeseros = async(req, res, next) => {
		try{
				const meseros = await Mesero.findAll()
				return res.status(200).json({
					total: meseros.length,
					meseros
				});
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const getMesero = async(req, res, next) => {
		try{
				const mesero = await Mesero.findOne({
					where: { id: req.params.id },
					raw: true 
				});
				return res.status(200).json(mesero);
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const createMesero = async(req, res, next) => {
		try{
				const mesero = await Mesero.create({ 
          tipo_documento:    req.body.tipo_documento,
          documento:         req.body.documento,
          nombre:            req.body.nombre,
          usuario_id:         req.body.usuario_id,
          sede_id:            req.body.sede_id,
					created_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
					updated_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
				},
				{
					raw: true 
				});
				if( mesero ){
					return res.status(200).json({
						mensaje: 'Mesero Creado Exitosamente.',
						mesero
					});
				}else{
					return res.status(400).json({
						mensaje: 'Hubo un error al crear un mesero.'
					});
				}

		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const updateMesero = async(req, res, next) => {
		try{

				const mesero = await Mesero.update({ 
          tipo_documento:    req.body.tipo_documento,
          documento:         req.body.documento,
          nombre:            req.body.nombre,
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
				if( mesero ){
					return res.status(200).json({
						mensaje: 'Mesero Actualizado Correctamente.'
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

export const deleteMesero = async(req, res, next) => {
		try{
			const mesero = await Mesero.destroy({ 
					where: { id: req.params.id }
			})
			if( mesero ){
				return res.status(200).json({
					mensaje: 'Mesero eliminado exitosamente.'
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