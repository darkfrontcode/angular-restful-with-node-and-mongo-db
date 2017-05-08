/**
    @description Resource factory
    @type class
*/
class resourceFactory {


    /**
        @description class constructor
        @param class $resource angular default ng-resource
    */
    constructor($resource){
        return $resource(
            '/api/people/:id',
            { id: '@_id' },
            { update: { method: 'PUT'} }
        )
    }


    /**
        @description Static function that exposes class
        @type function
    */
    static run($resource) {
        resourceFactory.instance = new resourceFactory($resource);
        return resourceFactory.instance;
    }

}


/**
    @description Manually inject dependencies. ngInject not work with ES6 directives
*/
resourceFactory.$inject = ['$resource'];


/**
    @description Export module
*/
module.exports = resourceFactory;
