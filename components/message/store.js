
const Model = require('./model');

//agregar informacion a mongoose
function addMessage(message) {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}
    
async function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterUser !== null) {
            filter = { user: filterUser };
        }
        //return list;
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error) {
                    reject(error);
                    return false;
                }

                resolve(populated);
            });
    })
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;

    const newMessage = foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
}



//Forma de crear un simulador de base de datos para pruebas
// const list = [];

// function addMessage(message) {
//     list.push(message);
// }

// function getMessages() {
//     return list;
// }

// module.exports = {
//     add: addMessage,
//     list: getMessages,
//     //get
//     //update
//     //delete
// }