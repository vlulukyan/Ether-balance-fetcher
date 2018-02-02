var express = require("express");  
var app = express(".env");  
var server = require("http").createServer(app);
var io = require("socket.io")(server);

server.listen(8080);

app.use(express.static("public"));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/html/index.html");
})

var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
	web3 = new Web3(Web3.currentProvider);
} else {
	// set the provider you want from Web3.providers
	web3 = new Web3(new Web3.providers.HttpProvider(process.env.API_URL));
}