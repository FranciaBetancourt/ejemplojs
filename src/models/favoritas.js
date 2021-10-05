const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Datos = new Schema({
    nombre_libro: String,
    nombre_autor: String,
    genero: String,
    editorial: String,
});
module.exports = mongoose.model('favoritas', Datos);