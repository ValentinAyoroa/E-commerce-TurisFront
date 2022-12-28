const express = require('express');
const dbCarritoProductsController = require('../controllers/db_carrito_products_controller');
const login = require('../middleware/login');
const { loginValidation } = require('../validations/userValidation');

const router = express.Router();

router.get('/', login, dbCarritoProductsController.getCarrito);
router.post('/agregarProducto/:id', loginValidation, dbCarritoProductsController.postCarrito);
// router.post('/actualizarQuantityProducto/:id/:action', loginValidation, dbCarritoProductsController.postQuantityProductCarrito);

router.post('/delete/:id', login, dbCarritoProductsController.postDeleteCarritoProduct);

module.exports = router;
