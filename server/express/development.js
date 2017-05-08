/**
    @description Dependencies
*/
const express                = require(`express`)
const mongoose               = require(`mongoose`)
const path                   = require(`path`)
const webpack                = require(`webpack`)
const webpack_config         = require(`../webpack/development`)
const bodyParser             = require(`body-parser`)
const routes                 = require(`./routes`)
const webpack_dev_middleware = require(`webpack-dev-middleware`)
const webpack_hot_middleware = require(`webpack-hot-middleware`)


/**
    @description Instances
*/
const port = process.env.PORT || 3000
const environment = process.env.NODE_ENV || `development`
const app = express()
const webpack_compiler = webpack(webpack_config)


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
    @description hot reload
*/

app.use(webpack_dev_middleware(webpack_compiler, {
	publicPath: webpack_config.output.publicPath,
	stats: { colors: true },
	historyApiFallback: true
}))
app.use(webpack_hot_middleware(webpack_compiler, {
	log: console.log
}))


/**
    @description Mongoose
*/
mongoose.connect(`mongodb://localhost/test`)
const db = mongoose.connection
db.once('open', () => console.log(`local mongo runing..`))


/**
    @description Connection
*/
const success = () => console.log(`Express server listening on port ${port} in ${environment} mode..`)
app.listen(port, success)
