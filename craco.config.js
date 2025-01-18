const webpack = require("webpack");

module.exports = {
    webpack: {
        configure: (config) => {
            config.resolve.fallback = {
                crypto: require.resolve("crypto-browserify"),
                stream: require.resolve("stream-browserify"),
                http: require.resolve("stream-http"),
                https: require.resolve("https-browserify"),
                zlib: require.resolve("browserify-zlib"),
                url: require.resolve("url")
            };

            config.plugins.push(
                new webpack.ProvidePlugin({
                    Buffer: ["buffer", "Buffer"],
                    process: "process/browser"
                })
            );

            return config;
        }
    }
};
