module.exports = {
    resolve: {
        // fallback: { 
        //     "os": require.resolve("path-browserify") 
        // },
        fallback: { 
            "os": require.resolve("os-browserify/browser") 
        },
    },
    // node: {
    //     fs: "empty"
    // }
}