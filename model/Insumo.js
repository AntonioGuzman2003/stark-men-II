const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const insumoSchema = new Schema({
    proveedor: {
        type: Schema.Types.ObjectId, 
        ref: 'Proveedor', // Referencia al modelo de Proveedor
        required: true
    },
    nominsumo: {
        type: String,
        required: true
    },
    preUni: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
});

const Insumo = mongoose.model('Insumo', insumoSchema);

module.exports = Insumo;
