const express = require('express');
const path = require('path');
const app = express();

//MIDDLEWARE
app.use(express.static('src/public'));
app.set('puerto', process.env.PORT || 3030);

//RUTAS
//Ruteo Home
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/src/views/index.html')))

//Ruteo Registro
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, '/src/views/register.html')))
app.post('/register', (req, res) => res.redirect('/'))

//Ruteo Ingreso
app.post('/login', (req, res) => res.redirect('/'))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '/src/views/login.html')))

//Ruteo Detalle 
app.get('/detalle-producto', (req, res) => res.sendFile(path.join(__dirname, '/src/views/detalle-producto.html')))
app.post('/detalle-producto', (req, res) => res.redirect('/'))

app.get('/productCart', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/views/productCart.html'))
})

//Ruteo Carrito
app.post('/productCart', (req, res) => res.redirect('/'))

app.listen(process.env.PORT || 3030, function () {
  console.log("Servidor funcionando en el puerto 3030")
});

