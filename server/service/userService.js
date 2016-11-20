var userPersistence = require('./../persistence/userPersistence')
function UserService(){
	
};

UserService.prototype.getUser = function(id){
	var promise =  new Promise(function(resolve, reject) {
		userPersistence.getUser(id).then(function(user){
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
        		resolve(user);
        	}else{
        		console.log(false);
        		resolve(false);
        	}
			
		});
	});
	return promise;
};

UserService.prototype.addUser = function(user){

	userPersistence.addUser(user);
//	userPersistence.addUser(user);
		//console.log("return from UP");
};
UserService.prototype.deleteUser=function(id){
	userPersistence.deleteUser(id);
};

var userService = new UserService();
module.exports = userService;

