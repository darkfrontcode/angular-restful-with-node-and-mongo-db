/**
    @description Dependencies
*/
const aboutController = require('../../controllers/about');


/**
    @description Dependencies
*/
module.exports = {
    url: "/about",
    templateUrl: "views/about",
    controller: aboutController,
    controllerAs: 'about'
}
