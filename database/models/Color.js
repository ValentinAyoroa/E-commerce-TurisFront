module.exports = (sequelize, dataTypes) => {
  const alias = 'Color';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false
    }
  };
  const config = {
    timestamps: false,
    tableName: 'colors'
  };
  const Color = sequelize.define(alias, cols, config);

  Color.associate = (models) => {
    Color.hasMany(models.Product, {
      foreignKey: 'color_id',
      as: 'color'
    });
  };

  return Color;
};
