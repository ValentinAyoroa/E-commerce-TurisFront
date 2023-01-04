const express = require('express');
const dbApiController = require('../controllers/db_api_controller');

const router = express.Router();

// API de usuarios
router.get('/users', dbApiController.getUsers);
router.get('/users/:id', dbApiController.getUsersId);
module.exports = router;

// API de productos
router.get('/products', dbApiController.getProducts);
router.get('/products/:id', dbApiController.getProductsId);

// API de colores
router.get('/colors', dbApiController.getColors);
