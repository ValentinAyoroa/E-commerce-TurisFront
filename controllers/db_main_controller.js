const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.products;

const db_main_controller = {

    'home_list': (req, res) => {
        Products.findAll()
            .then(productos => {
                res.render('index', { productos })
            })
    },

    'tienda_list': (req, res) => {
        Products.findAll()
            .then(productos => {
                res.render('tienda', { productos })
            })
    },
}
module.exports = db_main_controller;