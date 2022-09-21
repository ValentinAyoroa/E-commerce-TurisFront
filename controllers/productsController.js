const fs = require('fs');
const path = require('path');
const multer = require('multer')
function allProducts() {
    let jsonData = fs.readFileSync(path.join(__dirname, '../data/productos.json'));
    let data = JSON.parse(jsonData);
    return data;
};

function writeJson(data) {
    let JsonData = JSON.stringify(data, null, 6);
    fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JsonData);
}

const controller = {

    detalleproducto: function (req, res) {

        let data = allProducts();

        let productoEncontrado = data.find(producto => {
            return producto.id == req.params.id
        })
        res.render('detalle-producto', { producto: productoEncontrado });
    },

    carrito: (req, res) => res.render('carrito'),

    edit: (req, res) => {

        let data = allProducts();

        let productoEncontrado = data.find(producto => {
            return producto.id == req.params.id
        });

        res.render('editar-producto', { producto: productoEncontrado });
    },
    update: (req, res) => {
        let data = allProducts();

        let productoEncontrado = data.find(producto => {
            return producto.id == req.params.id
        });

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
            imagen: req.file.filename,
            descripcion: req.body.descripcion,
        }

        data.push(newProduct);

        writeJson(data);

        res.redirect('/');
    }

}

module.exports = controller