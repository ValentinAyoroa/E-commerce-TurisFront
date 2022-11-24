const { DataTypes } = require('sequelize');
const Color = require('./Color');

module.exports = () => {
  const alias = 'products';

  const cols = {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false

    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  };

  const config = {

    timeStamps: false,
    tableName: 'products'
  };

  const Product = Sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Color.belongToMany(models.Color, {
      as: 'colors',
      foreingKey: 'color_id'

    });
  };

  Product.associate = (models) => {
    Size.belongToMany(models.Size, {
      as: 'sizes',
      foreingKey: 'size_id'

    });
  };

  return Product;
};
