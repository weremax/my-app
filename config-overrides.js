module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log('env', env);
    const rulesC = {
        test: /\.css$/,
        use : [
            { loader: "react-web-component-style-loader" },
            /*{ loader: "postcss-loader" },*/
            { loader: "css-loader" },
            'postcss-loader'
        ]
    };
    // config.module.rules.push(rulesC);
    console.log('config', config.module.rules);

    return config;
}