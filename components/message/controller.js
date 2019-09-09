const store = require('./store');

//Primero agregamos la funcion para enviar los mensajes a otroa usuarios
function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message){
            console.error('[messageController] No hay mensaje o usuario');
            reject('Faltn datos');
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
function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}


// exporter el codigo para utilizarlo de donde lo solicitemos
module.exports = {
    addMessage,
};