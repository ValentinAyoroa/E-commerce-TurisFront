const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.home);
router.get('/tienda', mainController.tienda);
router.get('/prueba', function (req, res) {
  if (req.session.usuarioLogueado) {
    res.send(req.session.usuarioLogueado.nombre);
  } else {
    res.send('usuario no se encuentra en sesion');
  }
});

module.exports = router;
