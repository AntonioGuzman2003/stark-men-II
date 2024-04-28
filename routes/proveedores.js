const express = require('express')
const router = express.Router()

const proveedoresController = require('../controllers/proveedoresController')

router.get('/proveedores', proveedoresController.mostrar)

router.post('/crearproveedores',proveedoresController.crear)

router.post('/editarproveedores',proveedoresController.editar)

router.get('/borrarproveedores/:id',proveedoresController.borrar)

module.exports = router
