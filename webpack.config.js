const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: './index.ts',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'public/scripts')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
};
