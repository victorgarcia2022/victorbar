import moment from 'moment'
import { Sede } from '../database/models'

export const getSedes = async(req, res, next) => {
		try{
				const sedes = await Sede.findAll()
				return res.status(200).json({
					total: sedes.length,
					sedes
				});
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const getSede = async(req, res, next) => {
		try{
				const sede = await Sede.findOne({
					where: { id: req.params.id },
					raw: true 
				});
				return res.status(200).json(sede);
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const createSede = async(req, res, next) => {
		try{
			const sede = await Sede.create({ 
				nombre:            req.body.nombre,
				administrador:     req.body.administrador,
				n_mesas:           req.body.n_mesas,
				usuario_id:         req.body.usuario_id,
				created_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
				updated_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
			},
			{
				raw: true 
			});
			if( sede ){
				return res.status(200).json({
					mensaje: 'Sede Creada Exitosamente.',
					sede
				});
			}else{
				return res.status(400).json({
					mensaje: 'Hubo un error al crear una Sede.'
				});
			}

		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const updateSede = async(req, res, next) => {
		try{

				const sede = await Sede.update({ 
          nombre:            req.body.nombre,
          administrador:     req.body.administrador,
          n_mesas:           req.body.n_mesas,
          usuario_id:         req.body.usuario_id,
          updated_at:        moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
				},
				{ 
				  where : { id: req.params.id },
					returning: true,
					raw: true
        }
				)
				if( sede ){
					return res.status(200).json({
						mensaje: 'Sede Actualizada Correctamente.'
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

export const deleteSede = async(req, res, next) => {
		try{
			const sede = await Sede.destroy({ 
					where: { id: req.params.id }
			})
			if( sede ){
				return res.status(200).json({
					mensaje: 'Sede eliminada exitosamente.'
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