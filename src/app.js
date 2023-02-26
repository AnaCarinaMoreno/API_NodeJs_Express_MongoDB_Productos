const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
 
app.use(express.json());

//llamando a las rutas
const productos = require('./routs/productos')
 app.use('/api/productos', productos)


module.exports = app;
