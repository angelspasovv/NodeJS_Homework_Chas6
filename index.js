const express = require("express");
const app = express();
const { welcome, handleUser, handleNotFound, } = require("./handler.js");

app.get("/", welcome);
app.get("/user", handleUser);
app.use(handleNotFound);

app.listen(3000);
