const express = require('express');
const router = express.Router();
const dbMainController = require('../controllers/db_main_controller');

/* GET home page. */
router.get('/', dbMainController.home_list);
router.get('/tienda', dbMainController.tienda_list);
router.get('/prueba', function (req, res) {
  if (req.session.usuarioLogueado) {
    res.send(req.session.usuarioLogueado.nombre);
  } else {
    res.send('usuario no se encuentra en sesion');
  }
});

module.exports = router;
