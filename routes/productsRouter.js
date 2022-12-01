const express = require('express');
const login = require('../middleware/login');
const upload = require('../utils/multer');
const dbProductsController = require('../controllers/db_products_controller');

const router = express.Router();

router.get('/detalle-producto/:id', dbProductsController.getProductById);
router.post('/detalle-producto/:id', /* login, */ dbProductsController.postCarrito);

router.get('/carrito', dbProductsController.getCarrito);

router.get('/edit/:id', /* login, */ dbProductsController.getEditProduct);
router.put('/edit/:id', dbProductsController.putEditProduct);

router.delete('/delete/:id', /* login, */ dbProductsController.deleteDeleteProduct);
router.delete('/productosCarrito/delete/:id', /* login, */ dbProductsController.deleteProductCarrito);

router.get('/create', /*  login, */ dbProductsController.getCreateProduct);
router.post('/create', upload.single('imagen'), dbProductsController.postCreateProduct);

module.exports = router;
