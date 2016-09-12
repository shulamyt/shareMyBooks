var sql=require('mssql');
var basePersistence=require('./../persistence/basePersistence');
var util=require('util');

function UserPersistence(){
	basePersistence.apply(this);
};
var ADD_USER="insert into [dbo].[User] ([password],[f_name],[l_name],[email],[phone],[address]) values ";
var DEL_USER="delete from [dbo].[User] where password=";
var GET_USER="select * from [dbo].[User] where password=";
var FOR_LOGIN="and email=";
// var dbConfig={
// 	server:"localhost\\SQLEXPRESS",
// 	port:1433,
// 	database:"smb_test",
// 	user:"sa",
// 	password:"123456"
// };

UserPersistence.prototype.addUser = function(user){
		var conn = new sql.Connection(this.dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(ADD_USER+
				"("+
				"'"+user.password+"'"+","+
				"'"+user.f_name+"'"+","+
				"'"+user.l_name+"'"+","+
				"'"+user.email+"'"+","+
				"'"+user.phone+"'"+","+
				"'"+user.address+"'"+
				")",
				function(err,recordset){
					if(err){
						console.log(err+' error with query');
					}
					else{
						console.log(recordset);
					}
				});
		});
};

UserPersistence.prototype.deleteUser=function(password){
	var conn = new sql.Connection(this.dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(DEL_USER+password,
				function(err,recordset){
					if(err){
						console.log(err+' error with query');
					}
					else{

						console.log(recordset);
					}
				});
		});
	};

UserPersistence.prototype.getUser = function(password){
	var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(this.dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(GET_USER+password,
				function(err,recordset){
					if(err){
						console.log(err+' error with query');
						resolve(null);
					}
					else{
						console.log(recordset);
						resolve(recordset[0]);
					}
				});
		});
	});
	return promise;
};
UserPersistence.prototype.login = function(password,email){
	var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(this.dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(GET_USER+password+FOR_LOGIN+"'"+email+"'",
				function(err,recordset){
					if(err){
						console.log(err+' error with query');
						resolve(null);
					}
					else{
						console.log(recordset);
						resolve(recordset[0]);
					}
				});
		});
	});
	return promise;
};

util.inherits(UserPersistence,basePersistence);
module.exports = UserPersistence;
// var userPersistence = new UserPersistence();
// module.exports = userPersistence;