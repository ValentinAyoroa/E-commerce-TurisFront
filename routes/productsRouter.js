var express = require('express');
var path = require('path')
var router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/productos'))
  },
  filename: function (req, file, cb) {
    const newFileName = file.fieldname + Date.now() + path.extname(file.originalname)
    cb(null, newFileName)
  }
})
const upload = multer({ storage: storage })



router.get('/detalle-producto/:id', productsController.detalleproducto);
router.get('/carrito', productsController.carrito);
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);
router.get('/create', productsController.create);
router.post('/create', upload.single('imagen'), productsController.store);

module.exports = router
