const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    EUR: Number,
    USD: Number

})

const model = mongoose.model('rate', Schema);

module.exports = model;