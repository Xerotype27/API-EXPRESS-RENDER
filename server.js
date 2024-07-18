// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileRoutes = require('./routes/files'); // Importa las rutas de archivos
// const mongoose = require('mongoose');

// Inicializar Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectar a MongoDB (cambiar URI por tu conexión a la base de datos)
// mongoose.connect('mongodb://localhost:27017/express_api', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected...'))
// .catch(err => console.error(err));

// Usar las rutas
app.use('/api', fileRoutes); // Usa las rutas de archivos

// Definir una ruta simple
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
