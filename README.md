# Angular RESTful

### Description

> Simple app to management of people.

The focus right here is demonstrate an app that consumes mongoDB database integrated with RESTful APIs and runs angular js in the client for integration.

I deployed a clone of this repo to heroku on this link https://darkfrontcode.herokuapp.com/, go ahead and take a look.


> Avaliable RESTful methods

* POST => /api/people
* GET => /api/people
* GET => /api/people/:id
* PUT => /api/people/:id
* PATCH => /api/people/:id
* DELETE => /api/people/:id


> General information

In the server I use express and mongoose schemas to getting things up.

For client I use PUG and STYLUS for a better code performance and agility.

For package manager I chosen webpack instead gulp, it always had a better performance and have a lot of native features on demand.

If you thinking in install all dependencies please, prefer yarn instead npm, it's much faster and simple. If you are not familiar with yarn, please, check this link https://yarnpkg.com it will definitly change you life.

Every lines in the code is comented so you can follow the instructions if you have any doubts.


### Instructions

> How to use

* Install all dependencies by typing yarn install or if you still are using npm ( ={ ) type npm install
* Then you have to chose if you will use it in production or in development mode.
* If you chose production, just type npm start, if not, type npm run dev

> Spike

* For use this project properly you have to configure you mongoDB for prod and dev environment. You can do it by looking in the server/express folder of the project and chosing by production or development file and change mongoose conection configs.
