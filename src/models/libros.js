const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//se crea como esquema
const Valor = new Schema({
    nombre_libro: String,
    nombre_autor: String,
    genero: String,
    editorial: String,
});
//se exporta como modelo
module.exports = mongoose.model('libros', Valor);