const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

app.get("/", (req, res) => {
    res.send(`Hello World! Don't tell anyone, but my favorite color is ${ process.env.SECRET_COLOR }`);
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}...`);
});