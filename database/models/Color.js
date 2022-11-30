module.exports = (sequelize, dataTypes) => {
  const alias = 'colors';
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
    tableName: 'color'
  };
  const Color = sequelize.define(alias, cols, config);
  return Color;
};
