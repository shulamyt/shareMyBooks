var userService = require('./../service/userService');

module.exports = function (server) {
    //create
    server.get('/user', function (req, res) {
        var user = userService.getUser();
        res.status(201).json(user);
    });
    server.get('/adduser', function (req, res) {
    	var user={
    		"id":1134,
    		"first_name":"bracha",
    		"last_name":"neuman"
    	}
        userService.addUser(user);
        // res.status(201).json(user);
        console.log("return from service");
    });
};