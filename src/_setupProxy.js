import proxy from "http-proxy-middleware";

export default function(app) {
    app.use (
        proxy("/compare", {
            target: "https://api-us.faceplusplus.com/facepp/v3",
            changeOrigin: true
        })
    );
};