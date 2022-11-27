module.exports = (sequelize, dataTypes) => {
  let alias = 'users';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: dataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: dataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: dataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: dataTypes.DATE,
      allowNull: false
    }
  };
  let config = {
    timeStamps: false,
    tableName: 'users'
  };
  const User = sequelize.define(alias, cols, config);
  return User;
};
