module.exports = {
    entry: "./entry.ls",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.ls$/, loader: "livescript" }
        ]
    }
};
