//Modelo de datos para almacenar en la base de datos de usuarios.
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema ({
    name: String,
});

const model = mongoose.model('User', mySchema);
module.exports = model;