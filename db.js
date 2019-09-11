const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
        //userCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    });
    console.log('[db] Conectada Exitosamente');
}

module.exports = connect;
