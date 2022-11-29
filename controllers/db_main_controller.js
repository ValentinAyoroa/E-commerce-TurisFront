const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.products;

const dbMainController = {

  home_list: async(req, res) => {
    console.log('entor');
    const response = await Products.findAll();

    const products = response.map((item) => {
      return item.dataValues;
    });

    console.log(products);

    res.render('index', { productos: products });
  },

  tienda_list: (req, res) => {
    Products.findAll()
      .then(productos => {
        res.render('tienda', { productos });
      });
  }
};
module.exports = dbMainController;
