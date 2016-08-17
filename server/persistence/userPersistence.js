var sql=require('mssql');
var basePersistence=require('./../persistence/basePersistence');
var util=require('util');

function UserPersistence(){
	basePersistence.apply(this);
};

var ADD_USER="insert into [dbo].[User] ([id],[first_name],[last_name]) values "

UserPersistence.prototype.addUser = function(user){
	var conn = new sql.Connection(this.dbConfig);
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
};

util.inherits(UserPersistence,basePersistence);
module.exports = UserPersistence;
