const express = require('express')
const router = express.Router()

const ordencompraController = require('../controllers/ordencompraController')

router.get('/OrdenCompras', ordencompraController.mostrar)

router.post('/crearOrdenCompra',ordencompraController.crear)

router.post('/editarOrdenCompra',ordencompraController.editar)

router.get('/borrarOrdenCompra/:id',ordencompraController.borrar)

module.exports = router
