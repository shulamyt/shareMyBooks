function BookService(){
	
};
var sql=require('mssql');

var dbConfig={
	server:"localhost\\MSSQLSERVER",
	database:"smb_test"
};

BookService.prototype.getBook = function(){

	var conn = new sql.Connection(dbConfig);
	var req = new sql.Request(conn);

	conn.connect(function(err){
		if(err){
			console.log(err);
			return null;
		}
		req.query("select * from [dbo].[Book] b where b.bookId='123'",
			function(err,recordset){
				if(err){
					console.log(err);
					return null;
				}
				else{
					return recordset;
				}
			})
	});
	




	// var book = {
 //        name: "tttt",
 //        book_id: id
 //    };
	// return book;
};

var bookService = new BookService();
module.exports = bookService;
