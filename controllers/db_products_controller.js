const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.products;

const db_products_controller = {
    create: (req, res) => {
        res.render('crear-producto');
    },
    store: (req, res) => {
        Products.create({
            name: req.body.titulo,
            description: req.body.descripcion,
            price: req.body.precio,
            image: req.body.imagen,
        }).then(() => {
            res.redirect('/tienda')
        }).catch(error => res.send(error));
    },
    edit: (req, res) => {
        let productId = req.params.id;
        Products.findByPk(productId)
            .then((product) => {
                res.render('editar-producto', { producto: product })
            }).catch(error => res.send(error))
    },
    update: (req, res) => {
        let productId = req.params.id;
        Products.update({
            name: req.body.titulo,
            description: req.body.descripcion,
            price: req.body.precio,
            image: req.body.imagen,
        }, {
            where: {
                id: productId
            }
        }).then(() => {
            res.redirect('/')
        }).catch(error => res.send(error))
    },
    delete: (req, res) => {
        let productId = req.params.id;
        Products.destroy({
            where: {
                id: productId
            },
            force: true
        }).then(() => {
            res.redirect('/')
        }).catch(error => res.send(error))
    }
}
module.exports = db_products_controller;