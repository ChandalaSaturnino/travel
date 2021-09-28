const path = require('path');

const postCSSPlugins = [
	require('postcss-import'),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	require('autoprefixer'),
];

module.exports = {
	entry: './app/assets/scripts/App.js',
	output: {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'app'), // abs path for output
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'app'),
		},
		hot: true,
		port: 3000,
		host: '0.0.0.0',
		liveReload: false,
		watchFiles: './app/**/*.html',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader?url=false',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: postCSSPlugins,
							},
						},
					},
				],
			},
		],
	},
};
