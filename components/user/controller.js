//Exportamos store.js para tener el modelo
const store = require('./store');

//funtion para agregar el usuario y almacenarlo
function addUser(name) {
    //realizamos la validacion y hacemos una promesa
    if(!name) {
        return Promise.reject('Invalid name');
    }

    //Realizamos el paso de user que resive por paramatro del clientes
    const user = {
        name,
    };

    //retornamos el add al stores
    return store.add(user);
}

//funtion para listar los usuarios
function listUser() {
    return store.list();
}


//Exportamos el valor de modulos de clientes
module.exports = {
    addUser,
    listUser,
}