const { body } = require('express-validator');

const fs = require("fs");
const path = require("path");

function allUsers() {
    let jsonData = fs.readFileSync(path.join(__dirname, '../data/users.json'));
    let data = JSON.parse(jsonData);
    return data;
};

module.exports = {
    //validacion register
    registerValidation: [
        body("name")
            .notEmpty()
            .withMessage("*El campo nombre tiene que estar completo"),
        body("surname")
            .notEmpty()
            .withMessage("*El campo apellido tiene que estar completo"),

        body("email")
            .notEmpty()
            .withMessage("*El campo email debe estar completo")
            .bail()
            .isEmail()
            .withMessage("*Ingrese un mail válido")

            .custom(function (value, { req }) {
                const data = allUsers()

                const usuarioEncontrado = data.find(function (user) {
                    return user.email == value;
                })
                if (usuarioEncontrado) {
                    return false;
                }
                else {
                    return true;
                }

            }).withMessage("Email ya registrado"),

        body("password")
            .notEmpty()
            .withMessage("*El campo contraseña debe estar completo")
            .bail()
            .isLength({ min: 5 })
            .withMessage("*La contraseña debe tener minimo 5 caracteres"),
        body("confirm")
            .notEmpty()
            .withMessage("*Debes completar la confirmacion de contraseña")
            .bail()
            .custom(async (confirmPassword, { req }) => {
                const password = req.body.password;
                if (password !== confirmPassword) {
                    throw new Error("*Las contraseñas deben coincidir");
                }
            })
    ],

    loginValidation: [
        body("email")
            .notEmpty()
            .withMessage("Campo nombre incompleto"),
        body("password")
            .notEmpty()
            .withMessage("Campo password incompleto")
    ]
}