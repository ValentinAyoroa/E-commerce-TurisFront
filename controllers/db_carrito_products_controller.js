const db = require('../database/models');
const getDataDB = require('../utils/getDataDB');

const { Product, Color, Size, Carrito } = db;

const dbCarritoProductsController = {
  getCarrito: async (req, res) => {
    const response = await Carrito.findAll({
      include: [
        {
          model: Product,
          as: 'product',
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
        }
      ],
      where: {
        user_id: res.locals.usuario.id
      }
    });
    const productsCarritoResponse = getDataDB(response);
    const productsCarrito = productsCarritoResponse.map((productCarritoResponse) => {
      return {
        carritoId: productCarritoResponse.id,
        productId: productCarritoResponse.product.id,
        name: productCarritoResponse.product.name,
        price: productCarritoResponse.product.price,
        color: productCarritoResponse.product.color.name,
        image: productCarritoResponse.product.image,
        quantity: productCarritoResponse.quantity,
        total: productCarritoResponse.total,
        size: productCarritoResponse.product.size.size
      };
    });
    res.render('carrito', { productsCarrito });
  },
  postCarrito: async(req, res) => {
    const { params, body } = req;
    const response = await Carrito.findAll({
      where: {
        user_id: res.locals.usuario.id
      }
    });
    const productsCarrito = getDataDB(response);

    const existedProduct = productsCarrito.find((productCarrito) => {
      return productCarrito.product_id == params.id;
    });

    if (existedProduct) { // Productos existe en el carrito del usuario
      Carrito.update({
        quantity: existedProduct.quantity + Number(body.quantity),
        total: existedProduct.total + (body.price * body.quantity)
      },
      {
        where: {
          id: existedProduct.id
        }
      }).then(() => {
        res.redirect('/carrito');
      }).catch(error => { res.send(error); });
    } else { // Producto no existe en el carrito del usuario
      Carrito.create({
        product_id: params.id,
        quantity: body.quantity,
        total: body.quantity * body.price,
        user_id: res.locals.usuario.id
      }).then(() => {
        res.redirect('/carrito');
      }).catch(error => { res.send(error); });
    }
  },
  postQuantityProductCarrito: async(req, res) => { // pendiente por implementar
    const { params, body } = req;
    const response = await Carrito.findAll({
      where: {
        user_id: res.locals.usuario.id
      }
    });
    const productsCarrito = getDataDB(response);

    const existedProduct = productsCarrito.find((productCarrito) => {
      return productCarrito.product_id == params.id;
    });
    Carrito.update({
      quantity: Number(body.quantity),
      total: (body.price * body.quantity)
    },
    {
      where: {
        id: existedProduct.id
      }
    }).then(() => {
      res.redirect('/carrito');
    }).catch(error => { res.send(error); });
  },
  postFinalizarCompra: (req, res) => {
    res.render('finalizar-compra');
  },
  postDeleteCarritoProduct: (req, res) => {
    const carritoProductId = req.params.id;
    Carrito.destroy({
      where: { id: carritoProductId }, force: true
    })
      .then(() => {
        return res.redirect('/carrito');
      }).catch(error => res.send(error));
  }
};

module.exports = dbCarritoProductsController;
