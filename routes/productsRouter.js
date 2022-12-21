const express = require('express');
const login = require('../middleware/login');
const upload = require('../utils/multer');
const dbProductsController = require('../controllers/db_products_controller');
const dbCarritoProductsController = require('../controllers/db_carrito_products_controller');

const { productValidation } = require('../validations/productsValidations');
const { loginValidation } = require('../validations/userValidation');

const router = express.Router();

router.get('/detalle-producto/:id', dbProductsController.getProductById);
router.post('/detalle-producto/:id', loginValidation, dbCarritoProductsController.postCarrito);

router.get('/edit/:id', loginValidation, dbProductsController.getEditProduct);
router.put('/edit/:id', productValidation, dbProductsController.putEditProduct);

router.get('/delete/:id', dbProductsController.delete);
router.delete('/delete/:id', dbProductsController.destroy);

router.get('/create', loginValidation, dbProductsController.getCreateProduct);
router.post('/create', upload.single('imagen'), productValidation, dbProductsController.postCreateProduct);

module.exports = router;
