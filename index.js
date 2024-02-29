// var http = require("http");
// var url = require("url");
// var fs = require("fs");

const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/public/contact-me.html");
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
