const express = require('express');
const login = require('../middleware/login');
const upload = require('../utils/multer');
const dbProductsController = require('../controllers/db_products_controller');

const { productValidation } = require('../validations/productsValidations');
const { loginValidation } = require('../validations/userValidation');

const router = express.Router();

router.get('/detalle-producto/:id', dbProductsController.getProductById);
router.post('/detalle-producto/:id', loginValidation, dbProductsController.postCarrito);

router.get('/carrito', dbProductsController.getCarrito);

router.get('/edit/:id', loginValidation, dbProductsController.getEditProduct);
router.put('/edit/:id', productValidation, dbProductsController.putEditProduct);

router.delete('/delete/:id', loginValidation, dbProductsController.deleteDeleteProduct);
router.delete('/productosCarrito/delete/:id', loginValidation, dbProductsController.deleteProductCarrito);

router.get('/create', loginValidation, dbProductsController.getCreateProduct);
router.post('/create', upload.single('imagen'), productValidation, dbProductsController.postCreateProduct);

module.exports = router;
