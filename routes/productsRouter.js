var express = require('express');
var router = express.Router();
const productsController = require("../controllers/productsController");

router.get('/detalle-producto/:id', productsController.detalleproducto);
router.get('/carrito', productsController.carrito);
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);
router.get('/create', productsController.create);
router.post('/create', productsController.store);  

module.exports = router