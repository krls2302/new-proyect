const store = require('./store');

//Primero agregamos mensajes a la base de datos
function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message){
            console.error('[messageController] No hay mensaje o usuario');
            reject('Faltan datos');
            return false;
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };

        store.add(fullMessage);
        resolve(fullMessage);
    });
  
}

//Listar los mensajes que son enviados
function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

//Actualizamos mensajes solo con pacth
function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if(!id || !message) {
            reject('Invalid Data');
            return false;
        }
        const result = await store.updateText(id, message);
        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id) {
            reject('Id Invalido');
            return false;
        }

        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    })
}

// exporter el codigo para utilizarlo de donde lo solicitemos
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};