//Importar el modelo de user
const Model = require('./model');

//Funcion para agregar usuario
function addChats(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

function listChat(userId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (userId) {
            filter = {
                users: userId,
            }
        }

        Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }

                resolve(populated);
            });
    });
}


module.exports = {
    add: addChats,
    list: listChat,    
}