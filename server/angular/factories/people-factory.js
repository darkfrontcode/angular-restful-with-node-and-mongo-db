/**
    @description Prototype for people
    @type class
*/
class peopleFactory {


    /**
        @description constructor of people
        @param string name the name of the people
        @param string job the job of the people
        @param string image url with the adress of the image in the web
        @return object people
    */
    create(name, job, image){
        return { name, job, image }
    }


    /**
        @description Static function that exposes class
        @type function
    */
    static run() {
        peopleFactory.instance = new peopleFactory();
        return peopleFactory.instance;
    }

}


/**
    @description Export module
*/
module.exports = peopleFactory;
