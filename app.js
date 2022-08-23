const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/home.html'))
});

app.listen(3030, () => {
  console.log("Servidor funcionando en el puerto 3030");
});