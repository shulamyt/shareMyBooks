var sql=require('mssql');

function BookPersistence(){
	
};
var GET_BOOK_BY_ID="select * from [dbo].[Book] b where b.bookId=";
var dbConfig={
	server:"localhost\\MSSQLSERVER",
	port:1433,
	database:"smb_test",
	user:"sa",
	password:"123456"
};

BookPersistence.prototype.getBook = function(id){
	var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(GET_BOOK_BY_ID+id,
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
var connectDB=function(){

};
var bookPersistence = new BookPersistence();
module.exports = bookPersistence;
