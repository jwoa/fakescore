module.exports = {
    resolve: {
        // fallback: { 
        //     "os": require.resolve("path-browserify") 
        // },
        fallback: { 
            "os": require.resolve("os-browserify/browser"),
            "https": require.resolve("https-browserify"),
            "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    // "http": false,
    "https": false,
    "stream": false,
    "crypto": false,
        },
    },
    node: {
        fs: "empty"
    },
    target: 'node'
}