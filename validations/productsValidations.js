const { body } = require('express-validator');
const db = require('../database/models');
const Product = db.products;

module.exports = {
    productValidation: [
        body('titulo')
        .notEmpty()
        .withMessage('El titulo no puede estar vacio')
        .isLength({ min:5 })
        .withMessage('El titulo debe tener al menos 5 caracteres'),

        body('descripcion')
        .notEmpty()
        .withMessage('La descripcion no puede estar vacia')
        .isLength({ min:20 })
        .withMessage('La descripcion debe tener al menos 20 caracteres'),

        body('imagen')
      .custom(function (value, { req }) {
        return req.file;
      }).withMessage('No se ha cargado ninguna imagen')
      .bail()
      .custom(function (value, { req }) {
        const extensiones = ['.jpg', '.png', '.jfif', '.svg', '.tif', '.jpeg'];
        const info = path.extname(req.file.originalname);
        return extensiones.includes(info);
      }).withMessage('Imagen invalida')
    ] 
}