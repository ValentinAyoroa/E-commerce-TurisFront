function localsMiddleware(req, res, next) {
  res.locals.usuario = null;

  if (req.session.usuarioLogueado) {
    res.locals.usuario = req.session.usuarioLogueado;
    console.log(res.locals);
  }

  next();
}
module.exports = localsMiddleware;
