const express = require('express');
const log = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.js');

// escuchar al servidor
app.set('port',process.env.PORT || 3000);

//apuntar a las vistas
app.set('views', path.join(__dirname, 'views'));

//se configura el motor de vistas
app.set('view engine', 'ejs');
//conexión a la Base de Datos

mongoose.connect('mongodb+srv://Francia:rIpK3SXYZ6NzdAYL@cluster0.73nym.mongodb.net/BDlecturas?retryWrites=true&w=majority')
.then(bd => console.log('La base de datos se conectó')).catch(err => console.log(err));


//middleware
app.use(log('dev'));
app.use(bodyParser.urlencoded({extended: false}));

//rutas
app.use('/', indexRoutes);

app.listen(app.get('port'),() =>{
    console.log('Servidor funcionando en el puerto ', app.get('port'))
});