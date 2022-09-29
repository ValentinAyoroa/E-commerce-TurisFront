const { body } = require('express-validator');

module.exports = {
    //validacion register
    registerValidation: [
        body("name")
            .notEmpty()
            .withMessage("El campo nombre tiene que estar completo"),
        body("surname")
            .notEmpty()
            .withMessage("El campo apellido tiene que estar completo"),
        body("email")
            .notEmpty()
            .withMessage("El email debe estar completo")
            .bail()
            .isEmail()
            .withMessage("Ingrese un mail válido"),
        body("password")
            .notEmpty()
            .withMessage("La contraseña debe estar completa")
            .bail()
            .isLength({ min: 5 })
            .withMessage("La contraseña debe tener minimo 5 caracteres"),
        body("confirm-password")
            .notEmpty()
            .withMessage("las contraseñas deben coincidir")
            .custom(async (confirmPassword, { req }) => {
                const password = req.body.password;
                if (password !== confirmPassword) {
                    throw new Error("Las contraseñas deben coincidir")
                }
            })
    ]
}