var express = require('express');
var path = require('path')
var router = express.Router();
const multer = require('multer')
const usersController = require("../controllers/usersController");
const login = require("../middleware/login");
const { body } = require('express-validator'); //requiere express-validator, solo body.


const { registerValidation, loginValidation } = require("../validations/userValidation"); //requiere validacion para register.

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


router.get('/register', usersController.register);
router.post('/register', registerValidation, usersController.registerUser);

//login 
router.get('/login', usersController.login);
router.post('/login', loginValidation, usersController.processLogin);
router.post("/logout", usersController.logout);

//profile
router.get('/profile', login, usersController.profile);
router.get('/profile/edit', login, usersController.edit);


module.exports = router;