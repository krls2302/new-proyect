//Importar las librerias requeridas para trabajar
const express = require('express');
const bodyParser = require('body-parser');

//const router = require('./components/message/network');
const router = require('./network/routes');


//Utilazar expres para iniciar
var app = express();

//declaramos routers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);

app.use('/app', express.static('public'));



// app.use('/', function (req, res) {
//     res.send('Hola Bienvenido');
// });

app.listen(3000);
console.log('La aplicacion esta corriendo en puerto 3000');


