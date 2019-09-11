//Exportamos store.js para tener el modelo
const store = require('./store');

//funtion para agregar el usuario y almacenarlo
function addChat(users) {
    //realizamos la validacion y hacemos una promesa
    if(!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }
    //Realizamos el paso de user que resive por paramatro del clientes
    const chat = {
        users: users,
    };
    //retornamos el add al stores
    return store.add(chat);
}

//funtion para listar los usuarios
function listChats(userId) {
    return store.list(userId);
}


//Exportamos el valor de modulos de clientes
module.exports = {
    addChat,
    listChats,
}