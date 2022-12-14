const getDataDB = (response) => {
  return JSON.parse(JSON.stringify(response));
};

module.exports = getDataDB;
