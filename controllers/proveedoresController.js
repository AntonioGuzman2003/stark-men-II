const Proveedor = require('../model/Proveedor')
//Mostrar
module.exports.mostrar = (req, res) => {

    Proveedor.find({}, (error, proveedores) => {
        if (error) {

            return res.status(500).json({
                message: 'Error mostrando los proveedores'
            })
        }
        return res.render('../views/Proveedores.ejs', { proveedores: proveedores });
    })

}
//Crear
module.exports.crear = (req, res) => {
    const proveedor = new Proveedor({
        nombrecia: req.body.nombrecia,
    })
    proveedor.save(function (error, proveedor) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear al cliente'
            })
        }
        res.redirect('/proveedores')
    })
}
//Editar
module.exports.editar = (req, res) => {
    const id = req.body.id_editar.trim();
    const nombrecia = req.body.nombrecia_editar;

    Proveedor.findByIdAndUpdate(id, { nombrecia  }, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando al proveedor',
                error: error.message
            });
        }
        res.redirect('/proveedores')
    });
};

//Borrar
module.exports.borrar = (req, res) => {
    const id = req.params.id

    Proveedor.findByIdAndRemove(id, (error, proveedor) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminacion el proveedor',
                error: error.message
            });
        }
        res.redirect('/proveedores')
    });
};