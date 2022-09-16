const fs = require('fs');
const path = require('path');

function allProducts(){
    let jsonData = fs.readFileSync(path.join(__dirname, '../data/productos.json'));
    let data = JSON.parse(jsonData);
    return data
};

function writeJson(data){
    let JsonData = JSON.stringify(data, null, 6);
    fs.writeFileSync(path.join(__dirname, '../data/productos.json'), JsonData);
}

controller = {

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
        
    },

    create: (req, res) => {
        res.render('crear-producto');
    },
    store: (req, res) =>{

        let data = allProducts()

        const newProduct = {
            id: data.length + 1,
            titulo: req.body.titulo,
            precio: Number(req.body.precio),
            color: req.body.color,
            imagen: req.body.imagen,
            descripcion: req.body.descripcion,
        }

        data.push(newProduct);

        writeJson(data);

        res.redirect('/products/create');
    }

}

module.exports = controller