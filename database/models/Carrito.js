module.exports = (sequelize, dataTypes) => {
  const Product = require('./Product');
  const User = require('./User');
  let alias = 'carrito';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    quantity: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: dataTypes.FLOAT,
      allowNull: false
    },
    product_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  };
  let config = {
    timeStamps: false,
    tableName: 'carrito'
  };
  const Carrito = sequelize.define(alias, cols, config);
 /*  Carrito.associate = (models) => {
    Product.belongsToMany(models.Product, {
      as: 'products',
      foreingKey: 'product_id'
    });
  };
  Carrito.associate = (models) => {
    User.belongsToMany(models.User, {
      as: 'users',
      foreingKey: 'user_id'
    });
  }; */
  return Carrito;
};
