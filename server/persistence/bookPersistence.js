var sql=require('mssql');

function BookPersistence(){
	
};
var GET_BOOK_BY_ID="select * from [dbo].[Book] b where b.id=";
var SRCH_BOOK="select id,name,author,isloan,user_id from [dbo].[Book] where (name like '%";
var CNT_SRCH="%' or author like '%";
var CNT2_SRCH="%') and isloan='false'";
var CNT2_SRCH_PERSONAL="%') and user_id=";
var ADD_BOOK="insert into [dbo].[Book] ([name],[author],[description],[created_at],[shelf],[clmn],[isloan],[user_id]) values ";
var GET_DATE="GETDATE()";
var DEL_BOOK="delete from [dbo].[Book] where id=";
var GET_ALL_BOOKS="select id,name,author,description,shelf,clmn,isloan from [dbo].[Book] b where b.user_id="
var dbConfig={
	server:"localhost\\mssqlserver",
	port:1433,
	database:"smb_test",
	user:"sa",
	password:"123456"
};

BookPersistence.prototype.addBook=function(book){
	var conn = new sql.Connection(dbConfig);
	var req = new sql.Request(conn);
	conn.connect(function(err){
		if(err){
			console.log(err+' error at connecting to database');
			return null;
		}
		console.log("success to connect");
		req.query(ADD_BOOK+
			"("+
			"'"+book.name+"'"+","+
			"'"+book.author+"'"+","+
			"'"+book.description+"'"+","+
			    GET_DATE+","+
			"'"+book.shelf+"'"+","+
			"'"+book.clmn+"'"+","+
			"0,"+
			"'"+book.userId+"'"+
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

BookPersistence.prototype.search=function(tirm){
  var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(SRCH_BOOK+tirm+CNT_SRCH+tirm+CNT2_SRCH,
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
}
BookPersistence.prototype.searchInMyLibrary=function(tirm,userId){
  var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(SRCH_BOOK+tirm+CNT_SRCH+tirm+CNT2_SRCH_PERSONAL+userId,
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
}
BookPersistence.prototype.getAllBooks=function(userId){
  var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(GET_ALL_BOOKS+userId,
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
}

BookPersistence.prototype.deleteBook=function(id){
	var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(DEL_BOOK+id,
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


var connectDB=function(){

};
var bookPersistence = new BookPersistence();
module.exports = bookPersistence;
