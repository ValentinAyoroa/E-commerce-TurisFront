module.exports = (sequelize, dataTypes) => {
  let alias = 'sizes';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    size: {
      type: dataTypes.STRING,
      allowNull: false
    }
  };
  let config = {
    timeStamps: false,
    tableName: 'size'
  };
  const Size = sequelize.define(alias, cols, config);
  return Size;
};
