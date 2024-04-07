const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productoSchema = new Schema ({
    nombre: String,
    stock: Number,
    precio: Number,
    categoria: String
},{versionkey:false})

module.exports = mongoose.model('productos', productoSchema)