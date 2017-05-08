/**
    @description Dependencies
*/
const express                = require(`express`)
const mongoose               = require(`mongoose`)
const path                   = require(`path`)
const bodyParser             = require(`body-parser`)
const routes                 = require(`./routes`)


/**
    @description Instances
*/
const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || `development`
const app = express()


/**
    @description Middlewares
*/
app.set(`views`, path.join(__dirname, `../pug`))
app.set(`view engine`, `pug`)
app.use(express.static(path.join(__dirname, `../../public`)))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)


/**
    @description Mongoose
*/
mongoose.connect(`mongodb://<your-url><your-password><your-token>.mlab.com:<your-serialkey>/<your-api-hash>`)
const db = mongoose.connection
db.once('open', () => console.log(`mlab runing..`))


/**
    @description Connection
*/
const success = () => console.log(`Express server listening on port ${port} in ${environment} mode..`)
app.listen(port, success)
