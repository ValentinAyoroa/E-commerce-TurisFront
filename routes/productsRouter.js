const express = require('express');
const login = require('../middleware/login');
const upload = require('../utils/multer');
const dbProductsController = require('../controllers/db_products_controller');

const { productCreateValidation } = require('../validations/productsValidations');
const { loginValidation } = require('../validations/userValidation');

const router = express.Router();

router.get('/admin', loginValidation, dbProductsController.getProductAdmin);
router.get('/buscar', loginValidation, dbProductsController.getFindProduct);

router.get('/detalle-producto/:id', dbProductsController.getProductById);

router.get('/edit/:id', loginValidation, dbProductsController.getEditProduct);
router.put('/edit/:id', dbProductsController.putEditProduct);

router.get('/delete/:id', dbProductsController.delete);
router.delete('/delete/:id', dbProductsController.destroy);

router.get('/create', loginValidation, dbProductsController.getCreateProduct);
router.post('/create', upload.single('imagen'), productCreateValidation, dbProductsController.postCreateProduct);

module.exports = router;
