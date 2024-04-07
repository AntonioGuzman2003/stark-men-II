const OrdenCompra = require('../model/OrdenCompra');

exports.obtenerOrdenesCompra = (req, res) => {
    // Encuentra todas las órdenes de compra y popula las referencias a cliente y producto
    OrdenCompra.find({}).populate({ path: 'cliente', select: 'nombre' }).populate({ path: 'producto', select: 'nombre' }).exec((err, ordencompras) => {
        if (err) {
            console.error('Error al obtener órdenes de compra:', err);
            return res.status(500).send('Error al obtener órdenes de compra');
        }
        // Renderiza la vista 'OrdenCompras' pasando las órdenes de compra como contexto
        res.render('OrdenCompras', { ordencompras: ordencompras });
    });
};

//Mostrar
module.exports.mostrar = (req, res) => {
    OrdenCompra.find({}, (error, ordencompras) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando las órdenes de compra'
            });
        }
        res.render('../views/OrdenCompras', { ordencompras: ordencompras });
    });
};

//Crear
module.exports.crear = (req, res) => {
    const ordenCompra = new OrdenCompra({
        cliente: req.body.cliente,
        producto: req.body.producto,
        cantidad: req.body.cantidad,
        precio_unitario: req.body.precio_unitario,
        total: req.body.total,
        estado: req.body.estado,
        
    });
    
    ordenCompra.save((error, orden) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear la orden de compra',
                error: error.message
            });
        }
        res.redirect('/OrdenCompras');
    });
};

//Editar
module.exports.editar = (req, res) => {
    const id = req.body.id_ordenCompra.trim();
    const updateData = {
        cliente: req.body.cliente,
        producto: req.body.producto,        
        cantidad: req.body.cantidad,
        precio_unitario: req.body.precio_unitario,
        total: req.body.total,
        estado: req.body.estado,
      
    };

    OrdenCompra.findByIdAndUpdate(id, updateData, (error, orden) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando la orden de compra',
                error: error.message
            });
        }
        res.redirect('/OrdenCompras');
    });
};

//Borrar
module.exports.borrar = (req, res) => {
    const id = req.params.id;

    OrdenCompra.findByIdAndRemove(id, (error, orden) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando la orden de compra',
                error: error.message
            });
        }
        res.redirect('/OrdenCompras');
    });
};
