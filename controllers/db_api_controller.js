const db = require('../database/models');
const { User, Product, Color, Size } = db;

const dbApiController = {
  // API de usuarios
  getUsers: async (req, res) => {
    const users = await User.findAll();

    const usersMapped = users.map((user) => {
      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        detail: `/api/users/${user.id}`

      };
    });

    return res.status(200).json({ count: users.length, users: usersMapped });
  },

  getUsersId: async(req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId).catch(error => console.log(error));
    return res.status(200).json(
      {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        image: user.avatar,
        cellphone: user.cellphone
      });
  },

  // API de productos
  getProducts: async (req, res) => {
    const products = await Product.findAll({
      include: [
        {
          model: Size,
          as: 'size'
        },
        {
          model: Color,
          as: 'color'
        }
      ]
    });

    const productsMapped = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        color: product.color.name,
        size: product.size.size,
        detail: `/api/products/${product.id}`

      };
    });

    return res.status(200).json({ count: products.length, products: productsMapped });
  },
  getProductsId: async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findByPk(productId, {
      include: [
        {
          model: Size,
          as: 'size'
        },
        {
          model: Color,
          as: 'color'
        }
      ]
    }).catch(error => console.log(error));
    if (product) {
      return res.status(200).json(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          color: product.color.name,
          size: product.size.size
        });
    } else {
      res.json({ error: 'Producto no existe' });
    }
  }

};

module.exports = dbApiController;
