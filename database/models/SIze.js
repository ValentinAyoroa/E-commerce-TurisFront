const { DataTypes } = require('sequelize');

module.exports = () => {
  const alias = 'sizes';

  const cols = {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    }

  };

  const config = {

    timeStamps: false,
    tableName: 'size'
  };

  const Size = Sequelize.define(alias, cols, config);

  return Size;
};
