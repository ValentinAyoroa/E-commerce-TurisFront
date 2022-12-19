module.exports = (sequelize, dataTypes) => {
  const Product = require('./Product');
  const User = require('./User');
  const alias = 'Carrito';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
  const config = {
    timestamps: false,
    tableName: 'carrito'
  };
  const Carrito = sequelize.define(alias, cols, config);

  Carrito.associate = (models) => {
    Carrito.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_id'
    });
    Carrito.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    });
  };
  return Carrito;
};
