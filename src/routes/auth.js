export const auth = function(req, res, next) {
  if ( req.session && req.session.user )
    return next();
  else
    return res.status(422).json({
      message: "Usuario no Loggeado",
    });
};