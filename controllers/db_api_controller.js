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
  // API de ultimo usuario creado
  getUserLast: async(req, res) => {
    const userLastArray = await User.findAll({
      limit: 1,
      order: [['id', 'DESC']]
    });

    if (!userLastArray) {
      return res.status(404).json({ error: 'Tabla Users vacia' });
    }

    const userLast = {
      id: userLastArray[0].id,
      first_name: userLastArray[0].first_name
    };

    return res.status(200).json(userLast);
  },
  // API de ultimo producto creado
  getProductLast: async(req, res) => {
    const productLastArray = await Product.findAll({
      limit: 1,
      order: [['id', 'DESC']]
    });
    if (!productLastArray) {
      return res.status(404).json({ error: 'Tabla Products vacia' });
    }
    const productLast = {
      id: productLastArray[0].id,
      name: productLastArray[0].name
    };
    return res.status(200).json(productLast);
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
  },
  // API de colors
  getColors: async (req, res) => {
    const colors = await Color.findAll();
    const colorsMapped = colors.map((color) => {
      return {
        id: color.id,
        name: color.name,
        detail: `/api/colors/${color.id}`

      };
    });
    return res.status(200).json({ count: colors.length, colors: colorsMapped });
  },
  // API de sizes
  getSizes: async (req, res) => {
    const sizes = await Size.findAll();
    const sizesMapped = sizes.map((size) => {
      return {
        id: size.id,
        name: size.size,
        detail: `/api/sizes/${size.id}`

      };
    });
    return res.status(200).json({ count: sizes.length, sizes: sizesMapped });
  }

};

module.exports = dbApiController;
