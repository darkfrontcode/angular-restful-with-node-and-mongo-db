/**
    @description Dependencies
*/
const People = require('../../model/People');


/**
    @description Find a people by id
    @param number id people id
    @return Object
*/
module.exports = (req, res) => {
    People.findOne({
        _id: req.params.id
    })
    .exec((err, result) => {
        err ? res.status(500).send(err) : res.status(200).json(result);
    })
};
