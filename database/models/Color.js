const { DataTypes } = require('sequelize');

module.exports = () => {
  const alias = 'colors';

  const cols = {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  };

  const config = {

    timeStamps: false,
    tableName: 'color'
  };

  const Color = Sequelize.define(alias, cols, config);

  return Color;
};
