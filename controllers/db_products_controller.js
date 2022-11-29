const db = require('../database/models');
const fs = require('fs');
const path = require('path');

const filePathProductos = '../data/productos.json';
const filePathProductosCarrito = '../data/productos_carrito.json';
/* Analisas Productos */

function allProducts() {
  const jsonData = fs.readFileSync(path.join(__dirname, '../data/productos.json'));
  const data = JSON.parse(jsonData);
  return data;
};
/* escribir en JSON con un filePath */
function writeJson(data, filePath) {
  const JsonData = JSON.stringify(data, null, 6);
  fs.writeFileSync(path.join(__dirname, filePath), JsonData);
};

/* Analisis Carro */

function allProductsCarrito() {
  const jsonData = fs.readFileSync(path.join(__dirname, '../data/productos_carrito.json'));
  const data = JSON.parse(jsonData);
  return data;
};
const Products = db.products;

const dbProductsController = {
  getCreateProduct: (req, res) => {
    res.render('crear-producto');
  },
  postCreateProduct: (req, res) => {
    Products.create({
      name: req.body.titulo,
      description: req.body.descripcion,
      price: req.body.precio,
      image: '',
      color_id: 1, // cambiar
      size_id: 2 // cambiar
    }).then(() => {
      res.redirect('/tienda');
    }).catch(error => res.send(error));
  },
  edit: (req, res) => {
    const productId = req.params.id;
    Products.findByPk(productId)
      .then((product) => {
        res.render('editar-producto', { producto: product });
      }).catch(error => res.send(error));
  },
  update: (req, res) => {
    const productId = req.params.id;
    Products.update({
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
    }).catch(error => res.send(error));
  },
  delete: (req, res) => {
    const productId = req.params.id;
    Products.destroy({
      where: {
        id: productId
      },
      force: true
    }).then(() => {
      res.redirect('/');
    }).catch(error => res.send(error));
  },
  agregarCarrito: (req, res) => {
    const dataProductos = allProducts();
    const dataCarro = allProductsCarrito();
    const productoEncontrado = dataProductos.find(producto => {
      return producto.id == req.params.id;
    });
    /* const newProduct = {
                id: productoEncontrado.id,
                titulo: productoEncontrado.titulo,
                precio: productoEncontrado.precio,
                color: productoEncontrado.color,
                imagen: productoEncontrado.imagen,
                descripcion: productoEncontrado.descripcion,
            }; */
    dataCarro.push(productoEncontrado);
    writeJson(dataCarro, filePathProductosCarrito);
    res.redirect('/products/carrito');
  },

  detalleproducto: function (req, res) {
    const data = allProducts();
    const productoEncontrado = data.find(producto => {
      return producto.id == req.params.id;
    });
    res.render('detalle-producto', { producto: productoEncontrado });
  },
  productosCarritoDelete: function (req, res) {
    const id = req.params.id;
    const data = allProductsCarrito();

    const sinCarritoEliminado = data.filter((productoCarrito) => {
      return productoCarrito.id != id;
    });
    writeJson(sinCarritoEliminado, filePathProductosCarrito);
    res.redirect('/products/carrito');
  },
  carrito: (req, res) => res.render('carrito', { productosCarrito: allProductsCarrito() })
};
module.exports = dbProductsController;
