const express = require('express');
const dbCarritoProductsController = require('../controllers/db_carrito_products_controller');
const router = express.Router();

router.get('/', dbCarritoProductsController.getCarrito);
router.post('/delete/:id', dbCarritoProductsController.postDeleteCarritoProduct);

module.exports = router;
