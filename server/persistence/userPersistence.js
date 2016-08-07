var sql=require('mssql');

function UserPersistence(){
	
};
var ADD_USER="insert into [dbo].[User] ([id],[first_name],[last_name]) values "
var dbConfig={
	server:"localhost\\MSSQLSERVER",
	port:1433,
	database:"smb_test",
	user:"sa",
	password:"123456"
};

UserPersistence.prototype.addUser = function(user){
	var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(ADD_USER+"("+"'"+user.id+"'"+","+ "'"+user.first_name+"'"+","+"'"+user.last_name+"'"+")",
				function(err,recordset){
					if(err){
						console.log(err+' error with query');
						resolve(null);
					}
					else{

						console.log(recordset);
						resolve(recordset);
					}
				});
		});
	});
	return promise;
};

var userPersistence = new UserPersistence();
module.exports = userPersistence;
