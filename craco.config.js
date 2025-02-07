const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
    babel: {
        plugins: [],
        loaderOptions: (babelLoaderOptions, { env }) => {
            console.log('ENV', env)
            if (env === "production" || env === "staging") {
                babelLoaderOptions.plugins = (babelLoaderOptions.plugins || []).filter(
                    (plugin) => typeof plugin !== "string" || plugin !== "react-refresh/babel"
                );
            }
            return babelLoaderOptions;
        },
    },
    webpack: {
        alias: {
            "@": resolvePath("./src"),
        },
    },
};
