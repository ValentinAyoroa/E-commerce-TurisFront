const express = require('express');
const dbApiController = require('../controllers/db_api_controller');

const router = express.Router();

router.get('/users', dbApiController.getUsers);
router.get('/users/:id', dbApiController.getUsersId);
module.exports = router;
