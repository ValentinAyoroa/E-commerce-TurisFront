const fs = require('fs');
const path = require('path');

function allProducts() {
    let jsonData = fs.readFileSync(path.join(__dirname, '../data/productos.json'));
    let data = JSON.parse(jsonData);
    return data;
};

controller = {
    home: function (req, res) {
        let data = allProducts();
        res.render('index', { productos: data });
    },
    tienda: (req, res) => {
        let data = allProducts();
        res.render('tienda', { productos: data });
    }
}

module.exports = controller;