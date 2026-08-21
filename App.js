const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000

// Parsear las solicitudes a formato JSON
app.use(bodyParser.json());

// Importar y usar las rutas de posts
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

// Ruta de prueba por defecto
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor');
});

// Conexión limpia y moderna sin opciones obsoletas
mongoose.connect('mongodb://localhost:27017/Login')
    .then(() => {
        console.log('Sí hay conexión a la BD');
    })
    .catch((error) => {
        console.log('Error al conectar a la BD:', error);
    });

// Configuración del puerto del servidor
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})