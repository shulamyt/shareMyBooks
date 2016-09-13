var userService = require('./../service/userService');

module.exports = function (server) {
    //create
    server.get('/users/:id', function (req, res) {
        userService.getUser(req.params.id).then(function(user){
            console.log(user);
            res.status(201).json(user);
        });
    });
    server.post('/users', function (req, res) {
        userService.addUser(req.body.user);
        console.log("return from service");
    });

    server.delete('/users',function(req,res){
    	userService.deleteUser(req.body.id);
    });
    server.post('/users/login', function (req, res) {
        userService.login(req.body.password,req.body.email).then(function(isUser){
            res.status(201).json(isUser);
        });
    });
    server.put('/users/:id',function(req,res){
    	userService.update()
    })

};