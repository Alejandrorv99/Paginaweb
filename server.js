const express = require('express');
const path = require('path');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Sirve los archivos estáticos de React desde la carpeta 'client/build'
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all: cualquier ruta que no coincida con las API, devuelve el archivo index.html de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
