const { DataTypes } = require('sequelize');
const Product = require('./Product');
const User = require('./User');

module.exports = () => {
  const alias = 'carrito';

  const cols = {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  };

  const config = {

    timeStamps: false,
    tableName: 'carrito'
  };

  const Carrito = Sequelize.define(alias, cols, config);

  Carrito.associate = (models) => {
    Product.belongToMany(models.Product, {
      as: 'products',
      foreingKey: 'product_id'

    });
  };

  Carrito.associate = (models) => {
    User.belongToMany(models.User, {
      as: 'users',
      foreingKey: 'user_id'

    });
  };

  return Carrito;
};
