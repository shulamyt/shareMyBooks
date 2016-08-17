var userService = require('./../service/userService');

module.exports = function (server) {
    //create
    server.get('/user', function (req, res) {
        var user = userService.getUser();
        res.status(201).json(user);
    });
    
    server.get('/adduser', function (req, res) {
    	var user={
    		"id":1111111,
    		"first_name":"aaa",
    		"last_name":"bbbb"
    	}
        userService.addUser(user);
        console.log("return from service");
    });
};