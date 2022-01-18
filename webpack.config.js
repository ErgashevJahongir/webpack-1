const path = require("path");
const HTML = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HTML({
            filename: "index.html",
            template: "./src/modules/index.html",
        }),

        new MiniCssExtractPlugin({
            filename: "app.css",
        }),
    ],
    optimization: {
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.less$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ],
            },
        ],
    },
};
