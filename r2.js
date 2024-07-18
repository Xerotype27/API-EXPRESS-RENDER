// // r2.js
// const AWS = require('aws-sdk');

// const accountId = '9b060b4adcc229ee6e3c2a83c8a54fa8';
// const accessKeyId = '278b0a37c53b1cd8267bf52c53578d0b';
// const secretAccessKey = '7483712c63a7d78666f258dd46fb354e54006ca23306ba9ab8f69a0b896a1ce8';
// const bucketName = 'test-form';

// const r2 = new AWS.S3({
//   accountId,
//   accessKeyId,
//   secretAccessKey,
//   bucket: bucketName,
// });

// module.exports = r2;

// r2.js
const AWS = require('aws-sdk');

const r2 = new AWS.S3({
  endpoint: new AWS.Endpoint('https://9b060b4adcc229ee6e3c2a83c8a54fa8.r2.cloudflarestorage.com'), // Asegúrate de reemplazar <your_account_id>
  accessKeyId: '278b0a37c53b1cd8267bf52c53578d0b',
  secretAccessKey: '7483712c63a7d78666f258dd46fb354e54006ca23306ba9ab8f69a0b896a1ce8',
  s3ForcePathStyle: true, // Esto puede ser necesario para algunos servicios S3 compatibles
  signatureVersion: 'v4',
  region: 'auto', // R2 no requiere una región específica
});

module.exports = r2;

