/**
    @description Dependencies
*/
const homeController = require('../../controllers/home')


/**
    @description Export module
*/
module.exports = {
    url: "/",
    templateUrl: "views/home",
    controller: homeController,
    controllerAs: 'home'
}
