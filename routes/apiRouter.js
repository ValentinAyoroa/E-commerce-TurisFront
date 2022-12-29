const express = require('express');
const dbApiController = require('../controllers/db_api_controller');

const router = express.Router();

router.get('/users', dbApiController.getUsers);
module.exports = router;
