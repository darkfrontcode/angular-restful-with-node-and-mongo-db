/**
    @description Dependencies
*/
const People = require('../../model/People');


/**
    @description Delete  a people
    @param number id people id
    @return number
*/
module.exports = (req, res) => {
    People.findOneAndRemove({
        _id: req.params.id
    }, (err, result) => {
        err ? res.status(500).send(err) : res.sendStatus(200);
    });
};
