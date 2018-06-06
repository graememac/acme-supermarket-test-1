var express = require('express');
var app = require('express')();
var http = require('http').Server(app);

app.use(express.static('dist'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});