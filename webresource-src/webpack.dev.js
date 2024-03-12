const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve("../obj/debug", "webresource-src")
    }
});