const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/images/productos'));
  },
  filename: function (req, file, cb) {
    const newFileName = file.fieldname + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const extensiones = ['.jpg', '.png', '.jfif', '.svg', '.tif'];
    const info = path.extname(file.originalname);
    const result = extensiones.includes(info);

    if (!result) {
      req.file = file;
    }

    cb(null, result);
  }
});


module.exports = upload;
