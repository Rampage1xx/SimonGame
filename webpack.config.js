module.exports = {
    entry: "./ClientSRC/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    // switch to source-map only for production
    devtool: 'eval-source-map',

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader?importLoaders=1', options: {url: false}},
                    {loader: 'postcss-loader'},


                ]
            },
            {
                test: /\.mp3$/,
                exclude: /(node_modules)/,
                loader: 'file-loader'
            },
            {
                test: /\.tsx$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {}
            },
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader'],
                exclude: /(node_modules)/
            },

        ],


    },
};
