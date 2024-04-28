const express = require('express')
const router = express.Router()

const insumoController = require('../controllers/insumoController')

router.get('/Insumos', insumoController.mostrar)

router.post('/crearInsumo',insumoController.crear)

router.post('/editarInsumo',insumoController.editar)

router.get('/borrarInsumo/:id',insumoController.borrar)

module.exports = router
