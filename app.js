const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/index.html'))
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/register.html'))
})

app.post('/register', (req, res) => {
  res.redirect('/')
})

app.get('/detalle-producto', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/detalle-producto.html'))
})

app.post('/detalle-producto', (req, res) => {
  res.redirect('/')
})

app.get('/productCart', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/productCart.html'))
})

app.post('/productCart', (req, res) => {
  res.redirect('/')
})

app.listen(3030, () => {
  console.log("Servidor funcionando en el puerto 3030");
});

