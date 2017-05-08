/**
    @description Dependencies
*/
const path                 = require(`path`)
const webpack              = require(`webpack`)
const ExtractTextPlugin    = require(`extract-text-webpack-plugin`)


/**
    @description Webpack settings
	@return object
*/
module.exports = {
	entry: [
		path.join(__dirname, `../angular/index.js`),
		path.join(__dirname, '../stylus/main.styl')
	],
	output: {
		path: path.join(__dirname, `../../public`),
		filename: `app.js`,
	},
	resolve: {
		extensions: [``, `.js`, `.styl`]
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: `babel`,
				query:{
					presets: [`es2015`]
				}
			},
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css"),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			compress:{ warnings: false }
		}),
		new webpack.BannerPlugin("{copyright:[`Dark Front Code`,`https://github.com/darkfrontcode`]}")
	]
}
