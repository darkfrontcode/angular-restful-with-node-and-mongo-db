/**
    @description Dependencies
*/
const People = require('../../model/People');


/**
    @description Show all people
    @return Object
*/
module.exports = (req, res) => {
    People.find({})
    .exec((err, result) => {
        err ? res.status(500).send(err) : res.status(200).json(result);
    });
}
