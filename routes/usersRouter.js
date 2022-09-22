var express = require('express');
var path = require('path')
var router = express.Router();
const multer = require('multer')
const usersController = require("../controllers/usersController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/productos'))
    },
    filename: function (req, file, cb) {
      const newFileName = file.fieldname + Date.now() + path.extname(file.originalname)
      cb(null, newFileName)
    }
  })
  const upload = multer({ storage: storage })

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', usersController.registerUser)

module.exports = router;