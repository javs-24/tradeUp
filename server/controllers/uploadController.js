const upload = require('../services/file-upload');
const uploadController = {};

// const singleUpload = upload.single('image')

uploadController.uploadImage = (req, res, next) => {
  console.log('before single upload')
  upload.array('upl', 1)
  next()
}

module.exports = uploadController;