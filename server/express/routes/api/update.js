/**
    @description Dependencies
*/
const People = require('../../model/People');


/**
    @description Find and update a people
    @param number id person unique id
    @param string name person title
    @param string job person job
    @param string image person picture
    @return Object
*/
module.exports = (req, res) => {
    People.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                job: req.body.job,
                image: req.body.image
            }
        },
        {
            upsert: true,
            new: false
        },
        (err, result) => {
            err ? res.status(500).send(err) : res.status(200).json(result);
        }
    );
};
