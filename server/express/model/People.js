/**
    @description Dependencies
*/
const mongoose = require('mongoose');


/**
    @description Schema
*/
const PeopleSchema = mongoose.Schema({
    name: String,
    job: String,
    image: String
});


/**
    @description Export module
*/
module.exports = mongoose.model('People', PeopleSchema);
