const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola mundo desde mi API REST!');
});

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde la API' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
