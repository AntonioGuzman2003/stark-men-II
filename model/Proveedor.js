const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proveedorSchema = new Schema ({
    nombrecia: String
},{versionkey:false})

module.exports = mongoose.model('proveedores', proveedorSchema)