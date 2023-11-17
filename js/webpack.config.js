// js/webpack.config.js

const path = require('path');
const rules = [
    {
        test: /\.js?/,
        exclude: /node_modules/, // Fix typo here
        loader: 'babel-loader'
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        arrowFunction: './src/arrow-function.js',
        classesInheritance: './src/classes-inheritance.js',
        defaultParamsSpreadOperators: './src/default-params-spread-operators.js',
        generator: './src/generator.js',
        letConstReview: './src/let-const-review.js',
        main: './src/main.js',
        promises: './src/promises.js',
        setMap: './src/set-map.js',
        stringNumber: './src/string-number.js',
        templateLiterals: './src/template-literals.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: './',
        port: 5000
    }
};