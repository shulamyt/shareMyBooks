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
	//var user=new User(details.password,details.f_name,details.l_name,details.email,details.phone,details.address);

	userPersistence.addUser(user);
};
UserService.prototype.deleteUser=function(password){
	userPersistence.deleteUser(password);
};

var userService = new UserService();
module.exports = userService;

