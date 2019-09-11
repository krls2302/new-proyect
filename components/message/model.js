const mongoose = require('mongoose');

const Shema = mongoose.Schema;

const myShema = new Shema ({
    user: String,
    message: String,
    date: Date,
});

const model = mongoose.model('Message', myShema);
module.exports = model;