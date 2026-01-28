const express = require("express");

const app = express()

app.get("/", (req, res, next)=> {
    res.send("Default - Home page rendered");
});

app.get("/user", (req, res, next)=> {
    res.send("User page rendered");
});


app.get("/profile", (req, res)=> {
    res.send("profile page rendered");
});


app.listen(7777, () => {
    console.log("Server created with port: 7777");
})







