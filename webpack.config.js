const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/app.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{ loader: 'style-loader'}, 
					{ loader: 'css-loader' }, 
					{ loader: 'sass-loader' },
					{
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									require('autoprefixer')
								];
							}
						}
	                },
				],
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true,
		open: true,
		compress: true,
		port: 3100, 
	}
}