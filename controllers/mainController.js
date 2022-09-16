//TENEMOS QUE HACER LAS IMÁGENES DE LOS PRODUCTOS DE RESOLUCION EN 600x870 px.
//PARA QUE DETALLE DE PRODUCTO NO TENGA PROBLEMAS DE RESOLUCIÓN.
//HAY QUE EDITARLAS, YO LO HICE CON EL PAINT, PONER "CAMBIAR TAMAÑO" Y ASIGNARLO.
//NO HACERLO POR CÓDIGO.
const productos = require("../data/productos");
controller = {
    
    home: function (req, res) {
        res.render('index', { productos: productos });
    },

    detalleproducto: function (req, res) {
        let productoEncontrado = productos.find(producto => {
            return producto.id == req.params.id
        })
        res.render('detalle-producto', { producto: productoEncontrado });
    },

    login: function (req, res) {
        res.render('login');
    },

    register: function (req, res) {
        res.render('register');
    },
    carrito: (req, res) => res.render('carrito'),
    edit: (req, res) => {
        let productoEncontrado = productos.find(producto => {
            return producto.id == req.params.id
        })
        res.render('editar-producto', { producto: productoEncontrado });
    },
    update: (req, res) => {
        
    },

    create: (req, res) => {
        res.render('crear-producto');
    },
    store: (req, res) =>{
        
    }

}

module.exports = controller;