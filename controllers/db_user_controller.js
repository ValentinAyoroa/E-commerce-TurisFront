const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

const { User } = db;

const dbUserController = {
  login: (req, res) => {
    res.render('login');
  },
  processLogin: async(req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.render('login', {
        errors: error.mapped(),
        old: req.body
      });
    };
    const userFound = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    console.log(userFound?.dataValues.password);
    console.log(req.body.password);
    const isPasswordEqual = bcrypt.compareSync(req.body.password, userFound?.dataValues.password);

    console.log(isPasswordEqual);

    if (userFound == null || !isPasswordEqual) {
      res.render('login', { errorLogin: 'Credenciales invalidas' });
    } else {
      req.session.usuarioLogueado = {
        id: userFound.id,
        first_name: userFound.first_name,
        last_name: userFound.last_name,
        email: userFound.email,
        avatar: userFound.avatar,
        cellphone: userFound.cellphone
      };
      if (req.body.remember) {
        res.cookie('recordame', userFound.id);
      }
      res.redirect('/');
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie('recordame');
    res.redirect('/');
  },
  register: function (req, res) {
    res.render('register');
  },
  registerUser: async function (req, res) {
    const errors = validationResult(req);
    console.log(errors); // llamamos la funcion para observar como salen los resultados.
    if (!errors.isEmpty()) {
      // si tenemos errores, los mostramos en pantalla.
      res.render('register', { errors: errors.mapped(), old: req.body });
    } else {
      // si no tenemos errores, creamos el usuario.
      User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        first_name: req.body.name,
        last_name: req.body.surname,
        cellphone: '', // TODO: actualizar  porque no existe campo cellphone en el formulario
        avatar: '' // TODO: actualizar
      }).then(() => {
        res.redirect('/users/register');
      }).catch(error => res.send(error));
    }
  },
  profile: (req, res) => {
    if (req.session.usuarioLogueado) {
      res.render('perfil', { usuario: req.session.usuarioLogueado });
    } else {
      res.render('login');
    };
  },
  avatar: function (req, res) {
    const userId = req.session.usuarioLogueado.id;
    User.update({
      avatar: '/images/users/' + req.file.filename
    }, {
      where: {
        id: userId
      }
    });
  },
  edit: function (req, res) {
    if (req.session.usuarioLogueado) {
      res.render('editar-perfil', { usuario: req.session.usuarioLogueado });
    } else {
      res.render('login');
    }
  },
  upload: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const userId = req.session.usuarioLogueado.id;
      User.update({
        email: req.body.email,
        first_name: req.body.nombre,
        last_name: req.body.apellido,
        cellphone: req.body.celular
      },
      {
        where: {
          id: userId
        }
      }).then((req, res) => {
        req.session.usuarioLogueado = {
          first_name: req.body.nombre,
          last_name: req.body.apellido,
          email: userFound.email,
          cellphone: req.body.celular
          // falta imagen, estoy medio perdido en este punto con sesssion y como
          // editarlo para adaptarlo a db
        };
      }).then(() => {
        res.redirect('/users/profile');
      }).catch(error => res.send(error));
    } else {
      res.render('editar-perfil', { errors: errors.mapped(), old: req.body });
    }
  }
};
module.exports = dbUserController;
