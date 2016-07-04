var express = require('express');
var bodyParser = require('body-parser');

var server = express();
server.use(express.static('app'));
server.use(bodyParser.json());


var createdServer = server.listen(3000, function () {

  var host = createdServer.address().address;
  var port = createdServer.address().port;
  var address;
  if(host === "::"){
	address = "http://localhost:" + port;
  }
  else{
  	address = "http://" + host + ':' + port;
  }

  console.log('shareMyBooks app listening at ' + address);

});
