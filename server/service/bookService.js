var sql=require('mssql');


function BookService(){
	
};

var dbConfig={
	server:"localhost\\MSSQLSERVER",
	port:1433,
	database:"smb_test",
	user:"sa",
	password:"123456"
};

BookService.prototype.getBook = function(){

	var conn = new sql.Connection(dbConfig);
	var req = new sql.Request(conn);
	conn.connect(function(err){
		if(err){
			console.log(err+' error at connecting to database');
			return null;
		}
		console.log("success to connect");
		req.query("select * from [dbo].[Book] b where b.bookId='123'",
			function(err,recordset){
				if(err){
					console.log(err+' error with query');
					return null;
				}
				else{
					console.log(recordset);
					return recordset[0];
				}
			});
	});
};

var bookService = new BookService();
module.exports = bookService;
