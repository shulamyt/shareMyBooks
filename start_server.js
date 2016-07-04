var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('app'));
app.use(bodyParser.json());


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;
  var address;
  if(host === "::"){
	address = "http://localhost:" + port;
  }
  else{
  	address = "http://" + host + ':' + port;
  }

  console.log('shareMyBooks app listening at ' + address);

})