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
	userPersistence.prototype.addUser(user);
		console.log("return from UP");
};

var userService = new UserService();
module.exports = userService;

