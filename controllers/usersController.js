const fs = require('fs');
const path = require('path');
const multer = require('multer')
const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const { use } = require('../routes');


function allUsers() {
    let jsonData = fs.readFileSync(path.join(__dirname, '../data/users.json'));
    let data = JSON.parse(jsonData);
    return data;
};

function writeProducts(data) {
    let JsonData = JSON.stringify(data, null, 6);
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), JsonData);
};

controller = {

    login: function (req, res) {
        res.render('login');
    },

    processLogin: (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.render("login", {
                errors: error.mapped()
            })

        };
        const data = allUsers();
        const userFound = data.find(function (user) {
            return user.email == req.body.email && bcrypt.compareSync(req.body.password, user.password)
        })
        if (!userFound) {
            res.render("login", { errorLogin: 'credenciales invalidas' })
        } else {
            req.session.usuarioLogueado = {
                id: userFound.id,
                nombre: userFound.nombre,
                email: userFound.email
            };
            if (req.body.remember) {
                res.cookie("recordame", userFound.id)
            }

            res.redirect("/prueba");
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie("recordame");
        res.redirect("/")
    },

    register: function (req, res) {
        res.render('register');
    },

    registerUser: function (req, res) {

        const errors = validationResult(req)
        console.log(errors); //llamamos la funcion para observar como salen los resultados.
        if (!errors.isEmpty()) {
            //si tenemos errores, los mostramos en pantalla.
            res.render('register', { errors: errors.mapped(), old: req.body });
        } else {
            //si no tenemos errores, creamos el usuario.
            const data = allUsers();

            const newUser = {
                id: data.length + 1,
                nombre: req.body.name,
                apellido: req.body.surname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
            }
            data.push(newUser);
            writeProducts(data);
            res.redirect('/users/register');
        }
    }
}

module.exports = controller;