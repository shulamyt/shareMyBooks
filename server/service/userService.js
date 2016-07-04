function UserService(){
	
};

UserService.prototype.getUser = function(){
	var user = {
        name: "shula",
        id: "302344"
    };
	return user;
};

var userService = new UserService();
module.exports = userService;

