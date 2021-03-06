var sql=require('mssql');

function BookPersistence(){
	
};
var GET_BOOK_BY_ID="select * from [dbo].[Book] b where b.id=";
var SRCH_BOOK="use [smb_test] select b.id,b.name,b.author,isloan,b.user_id,CONCAT(u.f_name,' ',u.l_name) ownerName "+
"from [dbo].[Book] b join [dbo].[User] u "+
"on u.id = b.user_id "+
"where b.name like '%";
var CNT1_SRCH="%' and b.author like '%";
var CNT2_SRCH="%' and CONCAT(u.f_name,u.l_name) like '%";
var CNT3_SRCH="%' and b.publishingHouse like '%";
var CNT4_SRCH="%' "
var CNT5_SRCH="and b.publishingYear = ";
var CNT6_SRCH_PERSONAL=" and user_id = ";
var CNT6_SRCH_PUBLIC=" and user_id <> ";
var ADD_BOOK="insert into [dbo].[Book] ([name],[author],[description],[created_at],[shelf],[clmn],[isloan],[user_id]) values ";
var GET_DATE="GETDATE()";
var DEL_BOOK="delete from [dbo].[Book] where id=";
var GET_ALL_BOOKS="select id,name,author,shelf,clmn,isloan,user_id from [dbo].[Book] b where b.user_id=";
var GET_LIKES="select top(5) l.book_name x,l.like_cnt y from [dbo].[Like] l order by l.like_cnt";
var UPDATE_LIKES="UPDATE [dbo].[Like] set like_cnt=like_cnt+1 where book_name like '"
var UPDTE_BOOK="UPDATE [dbo].[Book] SET "
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
					}
					else{
						console.log(recordset);
					}
				});
		});
	});
	return promise;
};
BookPersistence.prototype.search=function(term){
	var promise =  new Promise(function(resolve, reject) {
	console.log(term);
	var conn = new sql.Connection(dbConfig);
	var req = new sql.Request(conn);
	conn.connect(function(err){
		if(err){
			console.log(err+' error at connecting to database');
			return null;
		}
		console.log("success to connect");
		var g=SRCH_BOOK+term[0]+CNT1_SRCH+term[1]+CNT2_SRCH+term[2]+CNT3_SRCH+term[3]+CNT4_SRCH+term[4];
		if (term[5] && term[5]!=undefined) {	
			g=g+CNT5_SRCH+term[5];
		}			
		console.log(g);
		req.query(g,
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
BookPersistence.prototype.searchInPublicLibrary=function(term, userId){
  var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			var q = SRCH_BOOK+term[0]+CNT1_SRCH+term[1]+CNT2_SRCH+term[2]+CNT3_SRCH+term[3]+CNT4_SRCH+term[4];
			if (term[5]) {	
				q =q +CNT5_SRCH+term[5];
			}
			q = q + CNT6_SRCH_PUBLIC + userId;
			req.query(q,
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
BookPersistence.prototype.searchInMyLibrary=function(term,userId){
  var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			var q = SRCH_BOOK+term[0]+CNT1_SRCH+term[1]+CNT2_SRCH+term[2]+CNT3_SRCH+term[3]+CNT4_SRCH+term[4];
			if (term[5]) {	
				q =q +CNT5_SRCH+term[5];
			}
			q = q + CNT6_SRCH_PERSONAL + userId;
			req.query(q,
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

BookPersistence.prototype.getLikes=function(){
  var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to ciyhiy7ig7i");
			console.log("success to connect");
			console.log(GET_LIKES);
			req.query(GET_LIKES,
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

BookPersistence.prototype.updateLike=function(b){
  var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			//console.log(detailes);
			console.log(UPDATE_LIKES +b.name);
			req.query(/*UPDATE_LIKES +b.name +*/"'",
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
BookPersistence.prototype.updateBook=function(book){
	var conn = new sql.Connection(dbConfig);
	var req = new sql.Request(conn);
	conn.connect(function(err){
		if(err){
			console.log(err+' error at connecting to database');
			return null;
		}
		console.log("success to connect");
		console.log(book);

		var q=UPDTE_BOOK+'name = '+"'"+book.name+"'"/*' ,isloan=0 */;
		if (book.author) {
			q=q+' ,author= '+"'"+book.author+"'";
		}
		if (book.shelf) {
			q=q+' ,shelf= '+book.shelf;
		}
		if (book.clmn) {
			q=q+' ,clmn= '+ book.clmn;
		}
		if (book.isloan==true) {
			q=q+' ,isloan= '+1;
		}
		else if (book.isloan==false) {
			q=q+' ,isloan= '+0;
		}
		q=q+' WHERE id = '+book.id;
		console.log(q);
		req.query(q,
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
