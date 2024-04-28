const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const clientes = require('./model/Cliente');
const productos = require('./model/Producto');
const insumos = require('./model/insumo');
const proveedores = require('./model/Proveedor');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const alumnos = require('./routes/clientes');
app.use(alumnos)

const productosRoutes = require('./routes/productos');
app.use(productosRoutes)

const OrdenRoutes = require('./routes/ordenCompras');
app.use(OrdenRoutes)

const ProveedorRoutes = require('./routes/proveedores');
app.use(ProveedorRoutes)


const InsumoRoutes = require('./routes/insumos');
app.use(InsumoRoutes)

// Ruta para obtener clientes y productos
app.get('/obtenerClientesYProductos', async (req, res) => {
    try {
        // Obtener datos de clientes desde la base de datos
        const clientesData = await clientes.find({}, '_id nombre'); // Obtener IDs y nombres de clientes
        // Obtener datos de productos desde la base de datos
        const productosData = await productos.find({}, '_id nombre'); // Obtener IDs y nombres de productos
        // Enviar los datos como respuesta al cliente en formato JSON
        res.json({ clientes: clientesData, productos: productosData });
    } catch (error) {
        console.error('Error al obtener clientes y productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.get('/obtenerProveedores', async (req, res) => {
    try {
        const proveedoresData = await proveedores.find({}, '_id nombrecia'); 
        res.json({ proveedores: proveedoresData });
    } catch (error) {
        console.error('Error al obtener proveedores:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


app.use(express.urlencoded({extended: true}));
app.use(express.json());


    app.get('/', (req, res) => {
        res.send('hola')})
  
    app.listen(4000, () => {
    console.log('Server UPI en http://localhost:4000');
});
