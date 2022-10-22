const fs = require('fs');
const path = require('path');

function allProducts() {
  const jsonData = fs.readFileSync(path.join(__dirname, '../data/productos.json'));
  const data = JSON.parse(jsonData);
  return data;
};

controller = {
  home: function (req, res) {
    const data = allProducts();
    res.render('index', { productos: data });
  },
  tienda: (req, res) => {
    const data = allProducts();
    res.render('tienda', { productos: data });
  }
};

module.exports = controller;
