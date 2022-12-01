const fs = require('fs');
const path = require('path');

function allUsers() {
  const jsonData = fs.readFileSync(path.join(__dirname, '../data/users.json'));
  const data = JSON.parse(jsonData);
  return data;
};

function recordame(req, res, next) {
  if (!req.session.usuarioLogueado && req.cookies.recordame) {
    const data = allUsers();

    const userFound = data.find(function (user) {
      return user.id == req.cookies.recordame;
    });

    if (userFound) {
      req.session.usuarioLogueado = {
        id: userFound.id,
        nombre: userFound.nombre,
        email: userFound.email
      };
    }

    return next();
  }
  return next();
}
module.exports = recordame;
