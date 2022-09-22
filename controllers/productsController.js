const fs = require('fs');
const path = require('path');
const multer = require('multer')

/* Analisas Productos */

function allProducts() {
    let jsonData = fs.readFileSync(path.join(__dirname, '../data/productos.json'));
    let data = JSON.parse(jsonData);
    return data;
};

function writeJson(data) {
    let JsonData = JSON.stringify(data, null, 6);
    fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JsonData);
};

/* Encontrar producto  */

function findProduct(data) {
    data.find(producto => {
        return producto.id == req.params.id
    })
};

/* Analisis Carro */

function allProductsCarrito() {
    let jsonData = fs.readFileSync(path.join(__dirname, '../data/productos_carrito.json'));
    let data = JSON.parse(jsonData);
    return data;
};

function writeJsonCarrito(data) {
    let JsonData = JSON.stringify(data, null, 6);
    fs.writeFileSync(path.join(__dirname, '../data/productos_carrito.json'), JsonData);
}

/* Controlador */

const controller = {

    agregarCarrito: (req, res) => {
        const dataProductos = allProducts();
        const dataCarro = allProductsCarrito();
        const productoEncontrado = dataProductos.find(producto => {
            return producto.id == req.params.id
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
        writeJsonCarrito(dataCarro);
        res.redirect('/products/carrito');
    },

    detalleproducto: function (req, res) {

        let data = allProducts();
        const productoEncontrado = data.find(producto => {
            return producto.id == req.params.id
        });
        res.render('detalle-producto', { producto: productoEncontrado });
    },

    carrito: (req, res) => res.render('carrito'),

    edit: (req, res) => {

        let data = allProducts();
        const productoEncontrado = findProduct(data);
        res.render('editar-producto', { producto: productoEncontrado });
    },
    update: (req, res) => {
        let data = allProducts();
        const productoEncontrado = findProduct(data);
        productoEncontrado.titulo = req.body.titulo;
        productoEncontrado.precio = req.body.precio;
        productoEncontrado.color = req.body.color;
        productoEncontrado.descripcion = req.body.descripcion;
        writeJson(data)
        res.redirect('/')
    },

    create: (req, res) => {
        res.render('crear-producto');
    },
    store: (req, res) => {

        let data = allProducts()

        const newProduct = {
            id: data.length + 1,
            titulo: req.body.titulo,
            precio: Number(req.body.precio),
            color: req.body.color,
            imagen: '/images/productos/' + req.file.filename,
            descripcion: req.body.descripcion,
        }

        data.push(newProduct);

        writeJson(data);

        res.redirect('/');
    }

}

module.exports = controller