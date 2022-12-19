module.exports = (sequelize, dataTypes) => {
  const alias = 'Product';
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

  Product.associate = (models) => {
    Product.belongsTo(models.Color, {
      as: 'color',
      foreignKey: 'color_id'
    });
    Product.belongsTo(models.Size, {
      as: 'size',
      foreignKey: 'size_id'
    });
    Product.hasMany(models.Carrito, {
      foreignKey: 'product_id',
      as: 'Carrito'
    });
  };

  return Product;
};
