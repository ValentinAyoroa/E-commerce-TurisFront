const path = require('path');
const { body } = require('express-validator');
const db = require('../database/models');
const User = db.users;

module.exports = {
  // validacion register
  registerValidation: [
    body('name')
      .notEmpty()
      .withMessage('*El campo nombre tiene que estar completo')
      .bail()
      .isLength({ min: 2 })
      .withMessage('*El nombre debe tener al menos 2 caracteres'),

    body('surname')
      .notEmpty()
      .withMessage('*El campo apellido tiene que estar completo')
      .bail()
      .isLength({ min: 2 })
      .withMessage('*El nombre debe tener al menos 2 caracteres'),

    body('email')
      .notEmpty()
      .withMessage('*El campo email debe estar completo')
      .bail()
      .isEmail()
      .withMessage('*Ingrese un mail válido')
      .custom(async function (value, { req }) {
        const user = await User.findOne({ where: { email: value } });
        if (user) {
          return Promise.reject(new Error('correo ya existe en la base de datos'));
        }
      }).withMessage('Email ya registrado'),

    body('password')
      .notEmpty()
      .withMessage('*El campo contraseña debe estar completo')
      .bail()
      .isLength({ min: 8 })
      .withMessage('*La contraseña debe tener minimo 8 caracteres')
      .bail()
      .custom(function(value, { req }) {
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (value.match(passw)) {
          return true;
        } else {
          throw new Error('*La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un dígito numérico y un carácter especial');
        }
      }),
    body('confirm')
      .notEmpty()
      .withMessage('*Debes completar la confirmacion de contraseña')
      .bail()
      .custom(async (confirmPassword, { req }) => {
        const password = req.body.password;
        if (password !== confirmPassword) {
          throw new Error('*Las contraseñas deben coincidir');
        }
      })
  ],

  loginValidation: [
    body('email')
      .notEmpty()
      .withMessage('Campo nombre incompleto'),
    body('password')
      .notEmpty()
      .withMessage('Campo password incompleto')
  ],

  avatarValidation: [
    body('avatar')
      .custom(function (value, { req }) {
        return req.file;
      }).withMessage('No se ha cargado ninguna imagen')
      .bail()
      .custom(function (value, { req }) {
        const extensiones = ['.jpg', '.png', '.jfif', '.svg', '.tif', '.jpeg'];
        const info = path.extname(req.file.originalname);
        return extensiones.includes(info);
      }).withMessage('Imagen invalida')
  ],

  profileValidation: [
    body('nombre')
      .notEmpty()
      .withMessage('El campo nombre tiene que estar completo'),
    body('apellido')
      .notEmpty()
      .withMessage('El campo apellido tiene que estar completo'),
    body('email')
      .notEmpty()
      .withMessage('El campo email debe estar completo')
      .bail()
      .isEmail()
      .withMessage('Ingrese un mail válido'),
    body('celular')
      .isLength({ max: 15 })
      .withMessage('El numero ingresado es demasiado largo')
  ]
};
