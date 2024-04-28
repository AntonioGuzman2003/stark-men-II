const Insumo = require('../model/insumo');
const Proveedor = require('../model/Proveedor'); // Importa el modelo de Proveedor

exports.obtenerInsumo = (req, res) => {
    // Encuentra todas las órdenes de compra y popula las referencias a proveedor
    Insumo.find({})
        .populate({ path: 'proveedor', select: 'nombrecia' })
        .exec((err, insumos) => {
            if (err) {
                console.error('Error al obtener insumos:', err);
                return res.status(500).send('Error al obtener insumos');
            }
            // Renderiza la vista 'Insumos' pasando los insumos como contexto
            res.render('Insumos', { insumos: insumos });
        });
};

//Mostrar
module.exports.mostrar = (req, res) => {
    Insumo.find({}, (error, insumos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los insumos'
            });
        }
        Proveedor.find({}, (error, proveedores) => {
            if (error) {
                return res.status(500).json({
                    message: 'Error mostrando los proveedores'
                });
            }
            res.render('../views/Insumos', { insumos: insumos, proveedores: proveedores });
        });
    });
};


module.exports.crear = (req, res) => {
    const nuevoInsumo = new Insumo({
        proveedor: req.body.idproveedor, // Asignar el ID del proveedor al campo proveedor
        nominsumo: req.body.nominsumo,
        preUni: req.body.preUni,
        stock: req.body.stock        
    });
    
    nuevoInsumo.save((error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear Insumo',
                error: error.message
            });
        }
        res.redirect('/Insumos');
    });
};


//Editar
module.exports.editar = (req, res) => {
    const id = req.body.id_insumo.trim();
    const updateData = {
        nominsumo: req.body.nominsumo,
        idproveedor: req.body.idproveedor, // Cambiado de id_proveedor a idproveedor
        preUni: req.body.preUni,
        stock: req.body.stock      
    };

    Insumo.findByIdAndUpdate(id, updateData, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando los insumos',
                error: error.message
            });
        }
        res.redirect('/Insumos');
    });
};


//Borrar
module.exports.borrar = (req, res) => {
    const id = req.params.id;

    Insumo.findByIdAndRemove(id, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando el insumo',
                error: error.message
            });
        }
        res.redirect('/Insumos');
    });
};
