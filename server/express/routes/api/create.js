/**
    @description Dependencies
*/
const People = require('../../model/People');


/**
    @description Create a person
    @param string name person title
    @param string job person job
    @param string image person picture
    @return Object
*/
module.exports = (req, res) => {
    People.create(
        {
            name: req.body.name,
            job: req.body.job,
            image: req.body.image
        },
        (err, result) => {
            err ? res.status(500).send(err) : res.status(201).json(result)
        }
    );
};
