const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();


router.get('/', function (req, res) {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.post('/', function (req, res) {
    //Llamamos los controladores que vienen en la cabezera
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 400, 'Error en el controler');
        });
    //res.send('Hola aprendiendo de node.js')
    //response.success(req, res);
});

router.delete('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(201).send('Hola aprendiendo de node.js')
});

module.exports = router;