const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();


router.get('/', function (req, res) {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
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

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error Interno', 500, e);
    });
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
    })
    .catch(e => {
        response.error(req, res, 'Error Interno', 500, e);
    })
});


module.exports = router;