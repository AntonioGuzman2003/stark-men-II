const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')

router.get('/', clienteController.mostrar)

router.post('/crear',clienteController.crear)

router.post('/editar',clienteController.editar)

router.get('/borrar/:id',clienteController.borrar)

module.exports = router
