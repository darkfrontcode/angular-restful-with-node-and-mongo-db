/**
    @description Dependencies
*/
const angular                = require('angular')
const uiRouter               = require('angular-ui-router')
const ngResource             = require('angular-resource')
const configRouter           = require('./router')
const resourceFactory        = require('./factories/resource-factory')
const requestControllFactory = require('./factories/request-controll-factory')
const peopleFactory          = require('./factories/people-factory')

/**
    @description Angular entry point
*/
const app = angular.module('app', [uiRouter, ngResource])
.factory('resourceFactory', resourceFactory.run)
.factory('requestControllFactory', requestControllFactory.run)
.factory('peopleFactory', peopleFactory.run)
.config(configRouter)


/**
    @description Export module
*/
module.exports = app
