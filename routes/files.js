// routes/files.js
const express = require('express');
const r2 = require('../r2');

const router = express.Router();

router.get('/list-files', async (req, res) => {
  try {
    const folderPath = 'formularios'; // La carpeta puede ser pasada como query param
    const bucketName = 'test-form'; // Reemplaza con el nombre de tu bucket
    const publicBaseUrl = `https://demo.abmodel.cl`; // Reemplaza <your_account_id>

    const params = {
      Bucket: bucketName,
      Prefix: folderPath,
    };

    const data = await r2.listObjectsV2(params).promise();

    const filesWithUrls = data.Contents.map(file => ({
      ...file,
      publicUrl: `${publicBaseUrl}/${file.Key}`,
    }));

    res.json(filesWithUrls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error listing files', error: error.message });
  }
});

module.exports = router;
