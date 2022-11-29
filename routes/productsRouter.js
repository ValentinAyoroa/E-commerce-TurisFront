const express = require('express');
const login = require('../middleware/login');
const upload = require('../utils/multer');
const dbProductsController = require('../controllers/db_products_controller');

const router = express.Router();

router.get('/detalle-producto/:id', dbProductsController.detalleproducto);
router.post('/detalle-producto/:id', login, dbProductsController.agregarCarrito);
router.get('/carrito', dbProductsController.carrito);
router.get('/edit/:id', login, dbProductsController.edit);
router.put('/edit/:id', dbProductsController.update);
router.delete('/delete/:id', login, dbProductsController.delete);
router.post('/productosCarrito/delete/:id', login, dbProductsController.productosCarritoDelete);
router.get('/create', login, dbProductsController.getCreateProduct);
router.post('/create', upload.single('imagen'), dbProductsController.postCreateProduct);

module.exports = router;
