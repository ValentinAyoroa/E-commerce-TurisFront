controller = {
    home: function (req, res) {
        res.render('index');
    },

    detalleproducto: function (req, res) {
        res.render('detalle-producto');
    },

    login: function (req, res) {
        res.render('login');
    },

    register: function (req, res) {
        res.render('register');
    }
}



module.exports = controller;