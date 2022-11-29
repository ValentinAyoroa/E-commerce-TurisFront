module.exports = (sequelize, dataTypes) => {
  const alias = 'products';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    description: {
      type: dataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: dataTypes.DECIMAL,
      allowNull: false
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false
    },
    color_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    size_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  };

  const config = {
    tableName: 'products',
    timestamps: false
  };

  const Product = sequelize.define(alias, cols, config);

  /* Product.associate = (models) => {
    Color.belongsToMany(models.Color, {
      as: 'colors',
      foreingKey: 'color_id'

    });
  };

  Product.associate = (models) => {
    Size.belongsToMany(models.Size, {
      as: 'sizes',
      foreingKey: 'size_id'

    });
  }; */

  return Product;
};
