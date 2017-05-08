/**
    @description Home Controller
    @type class
*/
class homeController {


    /**
        @description Class constructor
        @param function $timeout default angular $timeout
        @param class resourceFactory ../factories/resource-factory factory that exposes ng-resource with url api
        @param class requestControllFactory ../factories/request-controll-factory Control state of requests
        @param class peopleFactory ../factories/people-factory People factory builder
        @return void
    */
    constructor(
        $timeout,
        resourceFactory,
        requestControllFactory,
        peopleFactory
    ) {


        /** @description default angular $timeout */
        this.$timeout = $timeout


        /** @description factory that exposes ng-resource with url api */
        this.resource = resourceFactory


        /** @description Control state of requests */
        this.requestControll = requestControllFactory


        /** @description People factory builder */
        this.peopleFactory = peopleFactory


        /** @description Controll card show/hide flux */
        this.active = -1


        /** @description request list of people from RESTful API */
        this.requestPerson()

    }


/* ==========================================================================
   -- Scope
   ========================================================================== */


    /**
        @description return person that will interact
        @param number id person unique id
        @return person object
    */
    findPersonById(id){
        return this.people.list.filter((person) => {
            if(person._id == id) return person
        })
    }


    /**
        @description add person to collection of persons
        @param object person angular-resource object
        @return void
    */
    personToCollection(person){

        // create status on new person
        person = this.createPersonStatus(person)

        // checks if object has property list or not. If not function will create it
        if(this.people.hasOwnProperty('list'))
            this.people.list.push(person)
        else
            this.people['list'] = person
    }


    /**
        @description finish create process
        @return void
    */
    createDone(){
        this.newPerson = false
    }


    /**
        @description checks if user have typed image url
        @param object person new person data object
        @return person object
    */
    reinforcePerson(person){
        if(person.image == null || person.image == "") person.image = "https://s-media-cache-ak0.pinimg.com/originals/b1/bb/ec/b1bbec499a0d66e5403480e8cda1bcbe.png"
        return person
    }


    /**
        @description load status prototype
        @return status objct
    */
    personStatusPrototype(){
        return {
            save: this.requestControll.init(),
            remove: this.requestControll.init()
        }
    }


    /**
        @description Person Status builder
        @param object person unique person object
        @return status objct
    */
    createPersonStatus(person){
        person['status'] = this.personStatusPrototype()
        return person
    }


    /**
        @description Add request status to each person of array
        @return void
    */
    addStatusToPerson(){
        this.people.list = this.people.list.map((person) => {
            person = this.createPersonStatus(person)
            return person
        })
    }


/* ==========================================================================
   -- API Request
   ========================================================================== */


    /**
        @description request list of people from RESTful API
        @return void
    */
    requestPerson(){
        this.resource.query(
            (data) => {
                this.people = angular.merge({}, { list: data })
                this.addStatusToPerson()
            }
        )
    }


    /**
        @description request people by id and apply changes on it
        @param object person { name, job, image }
        @return void
    */
    requestSave(person){

        // checks if user have typed image url
        person = this.reinforcePerson(person)

        // instance of person in people.list
        const personInstance = this.findPersonById(person._id)[0]

        // start tracking request
        personInstance.status.save = this.requestControll.start()

        // find people and update it
        const request = this.resource.get(
            { id: person._id },
            () => {

                // property changes
                request.name = person.name
                request.job = person.job
                request.image = person.image

                // update
                request.$update(
                    () => {
                        personInstance.status.save = this.requestControll.success()
                        this.deactive()
                    },
                    (err) => personInstance.status.save = this.requestControll.error()
                )

            }
        )

    }


    /**
        @description remove people from DB
        @param number id people unique id
        @return void
    */
    requestRemove(id){

        // instance of person in people.list
        const personInstance = this.findPersonById(id)[0]

        // start tracking request
        personInstance.status.remove = this.requestControll.start()

        // find people and update it
        const request = this.resource.get(
            { id },
            () => {

                // remove
                request.$delete(
                    () => {
                        personInstance.status.remove = this.requestControll.success()
                        this.remove(id)
                    },
                    (err) => personInstance.status.remove = this.requestControll.error()
                )

            }
        )

    }


    /**
        @description Create a people in DB
        @param object person { name, job, image }
        @return void
    */
    requestCreate(person){

        // checks if user have typed image url
        person = this.reinforcePerson(person)

        // start tracking request
        this.newPerson.status = this.requestControll.start()

        // instance
        const request = new this.resource()

        // property changes
        request.name = person.name
        request.job = person.job
        request.image = person.image

        // create
        this.resource.save(
            request,
            (people) => {
                this.newPerson.status = this.requestControll.success()
                this.personToCollection(people)
                this.createDone()
            },
            (err) => this.newPerson.status = this.requestControll.error()
        )

    }


/* ==========================================================================
   -- Card Interactions
   ========================================================================== */


    /**
        @description Create new person
        @return void
    */
    create(){
        this.newPerson = angular.merge(
            {},
            this.peopleFactory.create(null, null, null),
            { status: this.requestControll.init() }
        )

    }


    /**
        @description Undo create new person
        @return void
    */
    undo(){
        delete this.newPerson
    }


    /**
       @description Open card for edition
       @param number $index ng-repeat index
       @return void
    */
    edit($index){
       this.active = $index
    }


    /**
        @description Deactive all cards
        @return void
    */
    deactive(){
        this.active = -1
    }


    /**
        @description remove card from collection by id
        @param string id person id
        @return void
    */
    remove(id){
        this.people.list = this.people.list.filter((person) => {
            return person._id == id ? false : person
        })
        this.deactive()
    }


/* ==========================================================================
   -- Card load statements
   ========================================================================== */


    /**
        @description load statement for save
        @param object person unique person object
        @return boolean
    */
    loadSave(person){
        return person.status.save.request && !person.status.save.response ? true : false
    }


    /**
        @description load statement for remove
        @param object person unique person object
        @return boolean
    */
    loadRemove(person){
        return person.status.remove.request && !person.status.remove.response ? true : false
    }


}


/**
    @description Export module
*/
module.exports = homeController;
