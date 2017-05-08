'use strict';

class RequestControllFactory{


    /**
        @description Default prototype for request/response controll.
        @param boolean request default controll for request.
        @param boolean response default controll for response.
        @param boolean error default controll for error.
        @param boolean empty default controll for empty.
        @return Object
        @type function
    */
    requestControll(
        request  = false,
        response = false,
        error    = false,
        empty    = false
    ){
        return {
            request,
            response,
            error,
            empty
        }
    }


    /**
		@description Init state of request controll prototype.
		@return object
		@type function
	*/
	init(){
		return this.requestControll(
			false, 	 // request
			false,   // response
			false,   // error
			false    // empty
		)
	}


    /**
		@description Generic request start for request controll prototype.
		@return object
		@type function
	*/
	start(){
		return this.requestControll(
			true, 	 // request
			false,   // response
			false,   // error
			false    // empty
		)
	}


    /**
		@description Generic success for request controll prototype.
		@return object
		@type function
	*/
	success(){
		return this.requestControll(
			true,  	// request
			true,  	// response
			false,  // error
			false   // empty
		)
	}


    /**
		@description Generic error for request controll prototype.
		@return object
		@type function
	*/
	error(){
		return this.requestControll(
			true,  	// request
			true,  	// response
			true,  	// error
			false  // empty
		)
	}


    /**
        @description Generic error for request controll prototype.
        @return object
        @type function
    */
    empty(){
        return this.requestControll(
            true,  	// request
            true,  	// response
            false,  // error
            true    // empty
        )
    }


    /**
        @description Static function that exposes the directive
        @type function
    */
    static run() {
        RequestControllFactory.instance = new RequestControllFactory();
        return RequestControllFactory.instance;
    }

}

module.exports = RequestControllFactory;
