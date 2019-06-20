const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { AWS_SECRET_ACCESS, AWS_ACCESS_KEY } = process.env;


aws.config.update({
  secretAccessKey: AWS_SECRET_ACCESS,
  accessKeyId: AWS_ACCESS_KEY,
  region: 'us-east-2',
});

const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'tradeup1221',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;