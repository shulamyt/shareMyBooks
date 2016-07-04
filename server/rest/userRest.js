var userService = require('./../service/userService');

module.exports = function (server) {
    //create
    server.get('/user', function (req, res) {
        var user = userService.getUser();
        res.status(201).json(user);
    });
};