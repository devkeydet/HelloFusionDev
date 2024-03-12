const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = (env, argv) => {
//     console.log("argv.mode: " + argv.mode);    
// }

module.exports = {
    entry: "./index.ts",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
        },],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "wr-bundle.js",
        library: ["Devkeydet", "HelloFusionDev"],
        libraryTarget: "var"
    },
    plugins: [new CleanWebpackPlugin()]
};