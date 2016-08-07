var userPersistence = require('./../persistence/userPersistence');

function UserService(){
	
};

UserService.prototype.getUser = function(){
	var user = {
        name: "shula",
        id: "302344"
    };
	return user;
};

UserService.prototype.addUser = function(user){
	userPersistence.addUser(user);
};

var userService = new UserService();
module.exports = userService;

