var express = require('express');
var router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.home);
router.get('/detalle-producto/:id', mainController.detalleproducto);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/carrito', mainController.carrito);
router.get('/edit/:id', mainController.edit);
router.put('/edit/:id', mainController.update);
router.get('/create', mainController.create);
router.post('/create', mainController.create);  

module.exports = router;
