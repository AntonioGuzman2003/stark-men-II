const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordenCompraSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
});

const OrdenCompra = mongoose.model('ordencompra', ordenCompraSchema);

module.exports = OrdenCompra;
