﻿//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

//use http libary to listen ..

var http = require("http");

// reference express      at command prompt did a  npm install express --save
// require to start up our server
var express = require("express");
//create a singleton   and executing it like a function
var app = express();


//create a web server  and a callback function
// request and response variable
//var server = http.createServer(function (req, res) {
//    console.log(req.url);
//    res.write("<html><body<h1>" + req.url + "</h1></body></html>");
//    res.end();
//});


// app object responds to http verbs  using methods   what is url  , root,  callback  supplies us with 
//request and response objects  
app.get("/", function (req, res) {
    //magic strings this would be painful 
    res.send("<html><body<h1>express</h1></body></html");
});


app.get("/api/users", function (req, res) {
    
    // control headers as well
    res.set("Content-Type", "application/json");

    //lets send an object or array , and express knows that we want to be serializing this as json
    //http://localhost:3000/api/users
    //returns the json
    //{"name":"Tom","isValid":true,"group":"Admin"}
    res.send({ name: "Tom", isValid: true, group: "Admin" });
});


//expose an interface with the app object capture the callback functions    and respond to request
var server = http.createServer(app);


// now we need to listen    port 80 for public   
server.listen(3000);