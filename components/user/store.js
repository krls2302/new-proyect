//Importar el modelo de user
const Model = require('./model');

//Funcion para agregar usuario
function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

function listUser() {
    return Model.find();
}



module.exports = {
    add: addUser,
    list: listUser,    
}