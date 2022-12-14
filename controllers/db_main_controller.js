const db = require('../database/models');
const getDataDB = require('../utils/getDataDB');

const { Product, Color, Size } = db;

const dbMainController = {

  home_list: async(req, res) => {
    const response = await Product.findAll({
      include: [
        {
          model: Color, as: 'color'
        },
        {
          model: Size, as: 'size'
        }
      ]
    });
    const products = getDataDB(response);
    res.render('index', { productos: products });
  },

  tienda_list: async(req, res) => {
    const response = await Product.findAll({
      include: [
        {
          model: Color, as: 'color'
        },
        {
          model: Size, as: 'size'
        }
      ]
    });
    const products = getDataDB(response);
    res.render('tienda', { products });
  }
};
module.exports = dbMainController;
