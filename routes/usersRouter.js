const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const usersController = require('../controllers/db_user_controller');
const login = require('../middleware/login');

const { registerValidation, loginValidation, profileValidation, avatarValidation } = require('../validations/userValidation'); // requiere validacion para register.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/users'));
  },
  filename: function (req, file, cb) {
    const newFileName = file.fieldname + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  }
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const extensiones = ['.jpg', '.png', '.jfif', '.svg', '.tif'];
    const info = path.extname(file.originalname);
    const result = extensiones.includes(info);

    if (!result) {
      req.file = file;
    }

    cb(null, result);
  }
});

router.get('/register', usersController.register);
router.post('/register', registerValidation, usersController.registerUser);

// login
router.get('/login', usersController.login);
router.post('/login', loginValidation, usersController.processLogin);
router.post('/logout', usersController.logout);

// profile
router.get('/profile', login, usersController.profile);
router.get('/profile/edit', login, usersController.edit);
router.post('/profile', login, upload.single('avatar'), avatarValidation, usersController.avatar);
router.put('/profile/edit', login, profileValidation, usersController.upload);

module.exports = router;
