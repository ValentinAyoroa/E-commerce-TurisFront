const fs = require("fs");
const path = require("path");


function allUsers() {
  let jsonData = fs.readFileSync(path.join(__dirname, '../data/users.json'));
  let data = JSON.parse(jsonData);
  return data;
};

function recordame(req, res, next) {
  if (!req.session.usuarioLogueado && req.cookies.recordame) {
    const data = allUsers();

    const userFound = data.find(function (user) {
      return user.id == req.cookies.recordame;
    })
    req.session.usuarioLogueado = {
      id: userFound.id,
      nombre: userFound.nombre,
      email: userFound.email,
    }
    return next()
  }
  return next()

}
module.exports = recordame;