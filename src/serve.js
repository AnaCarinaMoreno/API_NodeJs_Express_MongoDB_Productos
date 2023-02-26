const app = require('./app');
const conectData = require('./config/DB')

//Setear el archivo de configuracion
const dotenv = require('dotenv');
dotenv.config({path:'src/config/config.env'})

//conectamos a la base de datos
conectData();

//llamamos al server
const serve = app.listen(process.env.PORT, () => {
    console.log (`servidor iniciado en el puerto ${process.env.PORT}`)})

