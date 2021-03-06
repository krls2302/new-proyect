//Realizamos la exportacion de los archivos express y otros
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
// const controller = require('./controller');

const router = express.Router();

//Funcion para agregar usuario
router.post('/', (req, res) => {
    //Llamamos los controladores y el addUser
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err);
        });
});

router.get('/', (req, res) => {
    controller.listUser()
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(er => {
            response.error(req, res, 'Internal Error', 500, er);
        });
});


module.exports = router;