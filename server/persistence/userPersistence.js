var sql=require('mssql');
var basePersistence=require('./../persistence/basePersistence');
var util=require('util');

function UserPersistence(){
	//basePersistence.apply(this);
};
var ADD_USER="insert into [dbo].[User]  ([password],[f_name],[l_name],[email],[phone],[address]) values ";
var DEL_USER="delete from [dbo].[User]  where id=";
var GET_USER="select * from [dbo].[User]  where id=";
var FOR_LOGIN="and email=";
var LOGIN_USER="select * from [dbo].[User]  where password=";
var dbConfig={
	server:"localhost\\mssqlserver",
	port:1433,
	database:"smb_test",
	user:"sa",
	password:"123456"
};

UserPersistence.prototype.addUser = function(user){
		var conn = new sql.Connection(dbConfig);
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

UserPersistence.prototype.deleteUser=function(id){
	var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(DEL_USER+id,
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

UserPersistence.prototype.getUser = function(id){
	var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(GET_USER+id,
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
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			console.log(LOGIN_USER+ " '"+password + "' "+FOR_LOGIN+" '"+email+"'");
			req.query(LOGIN_USER+" '"+password+ "' "+FOR_LOGIN+" '"+email+"'",
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

// util.inherits(UserPersistence,basePersistence);
// module.exports = UserPersistence;
var userPersistence = new UserPersistence();
module.exports = userPersistence;