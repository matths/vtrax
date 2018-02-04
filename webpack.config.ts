import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

interface Process extends NodeJS.Process {
	traceDeprecation: boolean
}
declare var process: Process;
process.traceDeprecation = true;

const config:webpack.Configuration = {
	entry: {
		'main': './src/main.ts',
		'loader': './src/loader.ts',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '',
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				query: {
					pretty: true,
					debug: true
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './index.pug',
			title: 'Vue TypeScript Pug Stylus Template',
			chunks: ['loader', 'main'],
			chunksSortMode: 'manual',
			minify: {
				collapseWhitespace: false,
				keepClosingSlash: false,
				removeComments: false
			},
		})
	],
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		port: 8000,
		historyApiFallback: true,
		noInfo: false
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

export default config
