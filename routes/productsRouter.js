var express = require('express');
var path = require('path')
var router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require('multer')
const login = require("../middleware/login");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/productos'))
  },
  filename: function (req, file, cb) {
    const newFileName = file.fieldname + Date.now() + path.extname(file.originalname)
    cb(null, newFileName)
  }
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const extensiones = ['.jpg', '.png', '.jfif', '.svg', '.tif']
    const info = path.extname(file.originalname)
    const result = extensiones.includes(info)

    if (!result) {
      req.file = file
    }

    cb(null, result);

  }
})


router.get('/detalle-producto/:id', productsController.detalleproducto);
router.post('/detalle-producto/:id', login, productsController.agregarCarrito);
router.get('/carrito', productsController.carrito);
router.get('/edit/:id', login, productsController.edit);
router.put('/edit/:id', productsController.update);
router.delete('/delete/:id', login, productsController.delete);
router.post('/productosCarrito/delete/:id', login, productsController.productosCarritoDelete);
router.get('/create', login, productsController.create);
router.post('/create', upload.single('imagen'), productsController.store);

module.exports = router
