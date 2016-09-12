var userPersistence = require('./../persistence/userPersistence');
//var u = require('./../model/user');

function UserService(){
	
};

UserService.prototype.getUser = function(password){
	var promise =  new Promise(function(resolve, reject) {
		userPersistence.getUser(password).then(function(user){
			resolve(user);
		});
	});
	return promise;
};
UserService.prototype.login = function(password,email){
	var promise =  new Promise(function(resolve, reject) {
		userPersistence.login(password,email).then(function(user){
			if (user) {
        		console.log(true);
        		resolve(true);
        	}else{
        		console.log(false);
        		resolve(false);
        	}
			
		});
	});
	return promise;
};

UserService.prototype.addUser = function(user){

	userPersistence.prototype.addUser(user);
		console.log("return from UP");
};
UserService.prototype.deleteUser=function(password){
	userPersistence.deleteUser(password);
};

var userService = new UserService();
module.exports = userService;

