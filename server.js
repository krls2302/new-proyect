//Importar las librerias requeridas para trabajar
const express = require('express');
//Utilazar expres para iniciar
const app = express();
const server = require('http').Server(app);

//exportamos la configuracion de config
const config = require('./config');
//exportamos cors
const cors = require('cors');

//inicializamos parse
const bodyParser = require('body-parser');
const socket = require('./socket');

//creamos la instalacion para la base de datos
const db = require('./db');
//const router = require('./components/message/network');
const router = require('./network/routes');

//Conexion a la base de datos desde el servidor
db(config.dbUrl);

//usamos cors en nuestro server
app.use(cors());

//declaramos routers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

socket.connect(server);

//Iniciamos las rutas
router(app);

app.use(`/${config.publicRoute}`, express.static('public'));

// app.use('/', function (req, res) {
//     res.send('Hola Bienvenido');
// });

server.listen(config.port, () => {
    console.log(`Servidor corriendo en puerto ${config.host}:${config.port}`);
});


