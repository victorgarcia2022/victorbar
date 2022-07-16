import {body, validationResult} from 'express-validator'
import moment from 'moment'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Usuario } from '../database/models'

export const getUsuarios = async(req, res, next) => {
		try{
				const usuarios = await Usuario.findAll()
				return res.status(200).json({
					total: usuarios.length,
					usuarios
				});
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const getUsuario = async(req, res, next) => {
		try{
				const usuario = await Usuario.findOne({
					where: { id: req.params.id },
					raw: true 
				});
				return res.status(200).json(usuario);
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const createUsuario = async(req, res, next) => {
		try{
				const hashPass = await bcrypt.hash(req.body.password, 12)
				const usuario = await Usuario.create({ 
					email:              req.body.email,
					password:           hashPass,
					created_at:         moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
					updated_at:         moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
				},
				{
					raw: true 
				});
				if( usuario ){
					return res.status(200).json({
						mensaje: 'Usuario Creado Exitosamente.',
						usuario
					});
				}else{
					return res.status(400).json({
						mensaje: 'Hubo un error al crear un usuario.'
					});
				}

		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

export const updateUsuario = async(req, res, next) => {
		try{
				const hashPass = await bcrypt.hash(req.body.password, 12)

				const usuario = await Usuario.update({ 
								email:              req.body.email,
								password:           hashPass,
								updated_at:         moment(new Date()).utcOffset("-05:00").format("YYYY-MM-DD hh:mm:ss"),
						},
						{ 
								where : { id: req.params.id },
								returning: true,
								raw: true
						}
				)
				if( usuario ){
					return res.status(200).json({
						mensaje: 'Usuario Actualizado Correctamente.'
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

export const deleteUsuario = async(req, res, next) => {
		try{
			const usuario = await Usuario.destroy({ 
					where: { id: req.params.id }
			})
			if( usuario ){
				return res.status(200).json({
					mensaje: 'Usuario eliminado exitosamente.'
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


//LOGIN POST
export const loginUsuario = async (req, res) =>{
		const errors = validationResult(req);
		if(!errors.isEmpty()){
				return res.status(422).json({ errors: errors.array() });
		}
		try{
				const usuario = await Usuario.findOne({
						where: { email: req.body.email },
						raw: true
				})
				if ( usuario.email != req.body.email ) {
						return res.status(422).json({
								mensaje: "Email Inválido",
						});
				}
				const passMatch = await bcrypt.compare(req.body.password, usuario.password);
				if(!passMatch){
						return res.status(422).json({
								mensaje: "Contraseña Incorrecta",
						});
				}
				const theToken = jwt.sign({id:usuario.id},'the-super-strong-secrect',{ expiresIn: '24h' });
				return res.json({
						usuario: usuario,
						token:theToken
				});
		}catch( error ){
				return res.status(500).json({
						mensaje: 'Internal server error',
						error
				});
		}
}

//GET USER LOGIN WITH TOKEN
export const getUsuarioLogin = async (req,res,next) => {
		if(
				!req.headers.authorization ||
				!req.headers.authorization.startsWith('Bearer') ||
				!req.headers.authorization.split(' ')[1]
		){
				return res.status(422).json({
						mensaje: "No se validó el token",
				});
		}
		const theToken = req.headers.authorization.split(' ')[1];
		const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
		const usuario = await Usuario.findOne({
				where: { id: decoded.id },
				raw: true 
		})
		if(usuario.id > 0){
				return res.json({
						mensaje: 'Usuaro Loggeado',
						usuario
				});
		}
		res.json({
				mensaje:"Usuario No Encontrado"
		});
}