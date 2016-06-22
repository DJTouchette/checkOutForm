var express = require('express');
var app = express();
var http = require('http').Server(app);

// Home page
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

// Server set up
http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});

app.use(express.static(__dirname + '/public'));
