const express = require("express");
const path = require("path");

const app = express();

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "main", "index.html"));
});

app.listen(3000, () => {
    console.log("Running on port 3000");
})