module.exports = (sequelize, dataTypes) => {
  let alias = 'colors';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false
    }
  };
  let config = {

    timeStamps: false,
    tableName: 'color'
  };
  const Color = sequelize.define(alias, cols, config);
  return Color;
};
