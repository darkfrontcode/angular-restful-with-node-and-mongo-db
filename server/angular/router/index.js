/**
    @description Dependencies
*/
const home = require('./routes/home')
const about = require('./routes/about')


/**
    @description Router config
    @param service stateProvider default angular
    @param service urlRouterProvider default angular
    @param service locationProvider default angular
*/
const configRouter = (
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
) => {

    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home', home)
        .state('about', about)
}


/**
    @description Dependencies injection
*/
configRouter.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
]


/**
    @description Export module
*/
module.exports = configRouter
