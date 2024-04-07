const Producto = require('../model/Producto')
//Mostrar
module.exports.mostrar = (req, res) => {

    Producto.find({}, (error, productos) => {
        if (error) {

            return res.status(500).json({
                message: 'Error mostrando los Productos'
            })
        }
        return res.render('../views/Productos', { productos: productos });
    })

}
//Crear
module.exports.crear = (req, res) => {
    const producto = new Producto({
        nombre: req.body.nombre_producto,
        stock: req.body.stock_producto,
        precio: req.body.precio_producto,
        categoria: req.body.categoria_producto,
    })
    producto.save(function (error, producto) {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear al producto'
            })
        }
        res.redirect('/Productos')
    })
}
//Editar
module.exports.editar = (req, res) => {
    const id = req.body.id_editarp.trim();
    const nombre = req.body.nombrep_editar;
    const stock = req.body.stock_editar;
    const precio = req.body.precio_editar;
    const categoria = req.body.categoria_editar;

    Producto.findByIdAndUpdate(id, { nombre, stock, precio, categoria }, (error, producto) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando al Producto',
                error: error.message
            });
        }
        res.redirect('/Productos')
    });
};

//Borrar
module.exports.borrar = (req, res) => {
    const id = req.params.id

    Producto.findByIdAndRemove(id, (error, producto) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminacion al Producto',
                error: error.message
            });
        }
        res.redirect('/Productos')
    });
};