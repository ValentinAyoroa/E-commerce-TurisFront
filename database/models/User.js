const { DataTypes } = require('sequelize');

module.exports = () => {
  const alias = 'users';

  const cols = {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.DATE,
      allowNull: false
    }

  };

  const config = {

    timeStamps: false,
    tableName: 'users'
  };

  const User = Sequelize.define(alias, cols, config);

  return User;
};
