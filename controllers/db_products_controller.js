const db = require('../database/models');
const { Op } = require('sequelize');

const getDataDB = require('../utils/getDataDB');
const { validationResult } = require('express-validator');

const { Product, Color, Size } = db;

const dbProductsController = {
  getProductAdmin: (req, res) => {
    res.render('adminProducto');
  },
  getFindProduct: async (req, res) => {
    const { name } = req.query;
    const response = await Product.findAll({
      include: [
        {
          model: Size,
          as: 'size'
        },
        {
          model: Color,
          as: 'color'
        }
      ],
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      }
    });
    const products = getDataDB(response);
    res.render('buscarProducto', { products });
  },
  getCreateProduct: async(req, res) => {
    const responseColors = await Color.findAll();
    const colors = getDataDB(responseColors);

    const responseSize = await Size.findAll();
    const sizes = getDataDB(responseSize);

    res.render('crear-producto', { colors, sizes });
  },
  postCreateProduct: async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // si tenemos errores, los mostramos en pantalla.
      const response = await Color.findAll();
      const colors = getDataDB(response);
      const responseSize = await Size.findAll();
      const sizes = getDataDB(responseSize);

      res.render('crear-producto', { errors: errors.mapped(), old: req.body, colors, sizes });
    } else {
      Product.create({
        name: req.body.titulo,
        description: req.body.descripcion,
        price: req.body.precio,
        image: '/images/productos/' + req.file.filename,
        color_id: Number(req.body.color),
        size_id: Number(req.body.size)
      }).then(() => {
        res.redirect('/tienda');
      }).catch(error => res.send(error));
    }
  },
  getEditProduct: async(req, res) => {
    const productId = req.params.id;

    const responseColors = await Color.findAll();
    const colors = getDataDB(responseColors);

    const responseSize = await Size.findAll();
    const sizes = getDataDB(responseSize);

    Product.findByPk(productId)
      .then((product) => {
        res.render('editar-producto', { producto: product, colors, sizes });
      }).catch(error => res.send(error));
  },
  putEditProduct: (req, res) => {
    const productId = req.params.id;
    Product.update({
      name: req.body.titulo,
      description: req.body.descripcion,
      price: req.body.precio,
      image: req.body.imagen
    }, {
      where: {
        id: productId
      }
    }).then(() => {
      res.redirect('/');
    }).catch(error => {
      console.log(error);
      res.send(error);
    });
  },
  getProductById: function (req, res) {
    const productId = req.params.id;
    Product.findByPk(productId)
      .then((product) => {
        res.render('detalle-producto', { producto: product });
      }).catch(error => res.send(error));

    /*
        const data = allProducts();
        const productoEncontrado = data.find(producto => {
          return producto.id == req.params.id;
        });
        res.render('detalle-producto', { producto: productoEncontrado }); */
  },
  delete: function (req, res) {
    const productId = req.params.id;
    Product.findByPk(productId)
      .then((product) => {
        res.render('productDelete', { producto: product });
      }).catch(error => res.send(error));
  },
  destroy: (req, res) => {
    const productId = req.params.id;
    Product.destroy({
      where: { id: productId }, force: true
    })
      .then(() => {
        return res.redirect('/');
      }).catch(error => res.send(error));
  }
};
module.exports = dbProductsController;
