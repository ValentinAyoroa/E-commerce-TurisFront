module.exports = (sequelize, dataTypes) => {
  const alias = 'users';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    cellphone: {
      type: dataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: dataTypes.DATE,
      allowNull: false
    }
  };
  const config = {
    timestamps: false,
    tableName: 'users'
  };
  const User = sequelize.define(alias, cols, config);
  return User;
};
