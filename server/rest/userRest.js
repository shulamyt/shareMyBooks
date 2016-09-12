var userService = require('./../service/userService');

module.exports = function (server) {
    //create
    server.get('/users/:password', function (req, res) {
        userService.getUser(req.params.password).then(function(user){
            console.log(user);
            res.status(201).json(user);
        });
    });
    server.post('/users', function (req, res) {
        userService.addUser(req.body.user);
        // res.status(201).json(user);
        console.log("return from service");
    });

    server.delete('/users',function(req,res){
    	userService.deleteUser(req.body.password);
    });
    server.post('/users/login', function (req, res) {
        userService.login(req.body.password,req.body.email).then(function(isUser){
            res.status(201).json(isUser);
        });
    });

};