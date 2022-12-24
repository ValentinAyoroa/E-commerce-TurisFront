const express = require('express');
const dbCarritoProductsController = require('../controllers/db_carrito_products_controller');
const login = require('../middleware/login');

const router = express.Router();

router.get('/', login, dbCarritoProductsController.getCarrito);
router.post('/delete/:id', login, dbCarritoProductsController.postDeleteCarritoProduct);

module.exports = router;
