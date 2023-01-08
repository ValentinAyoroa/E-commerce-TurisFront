module.exports = {
  development: {
    username: process.env.USER_DB || 'root',
    password: process.env.PASSWORD_DB || '',
    database: process.env.NAME_DB || 'turisfront_db', // cambiar para otra BD cuándo se necesite
    host: process.env.HOST_DB || '127.0.0.1',
    dialect: 'mysql'
  }
};
