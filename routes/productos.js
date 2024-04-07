const express = require('express')
const router = express.Router()

const productoController = require('../controllers/productoController')

router.get('/Productos', productoController.mostrar)

router.post('/crearproducto',productoController.crear)

router.post('/editarproducto',productoController.editar)

router.get('/borrarproducto/:id',productoController.borrar)

module.exports = router
