let productos = [
    {
        id: 1,
        descripcion: 'Botas de cuero Domuyo - Montaña unisex',
        precio: '$12.500,00',
        imagen: 'images/botas.jpg'
    },
    {
        id: 2,
        descripcion: 'Guantes WINTER Softshell',
        precio: '$12.500,00',
        imagen: 'images/guantes.jpg'
    },
    {
        id: 3,
        descripcion: 'Campera ANSILTA FUSIÓN 3 en 1 GORE-TEX',
        precio: '$170.900,00',
        imagen: 'images/chaqueta.jpg'
    },

    {
        id: 4,
        descripcion: 'Sombrero Indico - Unisex',
        precio: '$5.500,00',
        imagen: 'images/gorros.jpg'
    },
    {
        id: 5,
        descripcion: 'Calza interior térmica POWER DRY - Mujer',
        precio: '$6.400,00',
        imagen: 'images/pantalon.jpg'
    },

    {
        id: 6,
        descripcion: 'Cuello Buff Trek500 azul',
        precio: '$8.400,00',
        imagen: 'images/tubular.jpg'
    },
    {
        id: 7,
        descripcion: 'Lentes RACE-Ski SALICE ',
        precio: '$19.500,00',
        imagen: 'images/gafas.jpg'
    },
    {
        id: 8,
        descripcion: 'Mochila camping montaña doite Natrang 70L ',
        precio: '$386,400',
        imagen: 'images/mochilai1-miniatura.png'
    },
    {
        id: 9,
        descripcion: 'Mochila de Hidratación 2 Litros - FOX ',
        precio: '$119.000',
        imagen: 'images/chaletos-hibratacion.jpg'
    },

]

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
    }
}



module.exports = controller;