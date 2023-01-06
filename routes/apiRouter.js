const express = require('express');
const dbApiController = require('../controllers/db_api_controller');

const router = express.Router();

// API de usuarios
router.get('/users', dbApiController.getUsers);
router.get('/users/last', dbApiController.getUserLast); // API de ultimo usuario creado
router.get('/users/:id', dbApiController.getUsersId);

// API de productos
router.get('/products', dbApiController.getProducts);
router.get('/products/last', dbApiController.getProductLast);// API de ultimo producto creado
router.get('/products/:id', dbApiController.getProductsId);

// API de colores
router.get('/colors', dbApiController.getColors);

// API de sizes
router.get('/sizes', dbApiController.getSizes);

module.exports = router;
