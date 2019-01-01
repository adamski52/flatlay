const proxy = require("http-proxy-middleware");
const express = require("express");
const app = express();
 
const PORT = 8000;
app.use(express.static("build"));
app.use("/api", proxy({
    target: "http://api:9000",
    changeOrigin: true
}));

app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});