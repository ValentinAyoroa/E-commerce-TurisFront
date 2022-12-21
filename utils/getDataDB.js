const getDataDB = (response) => { // crea un objeto de la respuesta de una peticion a la base de datos, esto porque la respuesta tiene muchas cosas que no usamos
  return JSON.parse(JSON.stringify(response));
};

module.exports = getDataDB;
