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

/* Controlador */

const controller = {

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

  carrito: (req, res) => res.render('carrito', { productosCarrito: allProductsCarrito() }),

  edit: (req, res) => {
    const data = allProducts();
    const productoEncontrado = data.find(producto => {
      return producto.id == req.params.id;
    });
    res.render('editar-producto', { producto: productoEncontrado });
  },
  update: (req, res) => {
    const data = allProducts();

    const productoEncontrado = data.find(producto => {
      return producto.id == req.params.id;
    });

    productoEncontrado.titulo = req.body.titulo;
    productoEncontrado.precio = req.body.precio;
    productoEncontrado.color = req.body.color;
    productoEncontrado.descripcion = req.body.descripcion;
    writeJson(data, filePathProductos);
    res.redirect('/');
  },

  create: (req, res) => {
    res.render('crear-producto');
  },
  store: (req, res) => {
    const data = allProducts();

    const newProduct = {
      id: data.length + 1,
      titulo: req.body.titulo,
      precio: Number(req.body.precio),
      color: req.body.color,
      imagen: '/images/productos/' + req.file.filename,
      descripcion: req.body.descripcion
    };

    data.push(newProduct);

    writeJson(data, filePathProductos);

    res.redirect('/');
  },
  delete: function (req, res) {
    const data = allProducts();

    const platoEncontrado = data.findIndex(function (plato) {
      return plato.id == req.params.id;
    });

    data.splice(platoEncontrado, 1);

    writeJson(data, filePathProductos);

    res.redirect('/');
  },
  productosCarritoDelete: function (req, res) {
    const id = req.params.id;
    const data = allProductsCarrito();

    const sinCarritoEliminado = data.filter((productoCarrito) => {
      return productoCarrito.id != id;
    });
    writeJson(sinCarritoEliminado, filePathProductosCarrito);
    res.redirect('/products/carrito');
  }

};

module.exports = controller;
