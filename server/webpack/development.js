/**
    @description Dependencies
*/
const path    = require('path');
const webpack = require('webpack');


/**
    @description Webpack settings
	@return object
*/
module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		path.join(__dirname, '../angular/index.js'),
		path.join(__dirname, '../stylus/main.styl')
	],
	output: {
		path: path.join(__dirname, '../../public'),
		filename: "app.js"
	},
	resolve: {
		extensions: ['', '.js', '.styl']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query:{
					presets: ['es2015']
				}
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}
