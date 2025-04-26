const path = require('path');

module.exports = {

    mode: 'development',

    entry: './client/index.ts',
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    
    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss'],
    },
    
    output: {
        filename: 'index.js',
        chunkFilename: 'index.js',
        path: path.resolve(__dirname, 'public', 'dist'),
        clean: true,
    },
    
    devtool: 'source-map',
};