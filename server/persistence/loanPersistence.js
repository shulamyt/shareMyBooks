var sql=require('mssql');

function LoanPersistence(){
	
};

var ASK_BOOK="insert into [dbo].[Loan] ([id_book],[id_lender],[id_borrower],[accepted]) values ";
var CONFIRM="UPDATE [dbo].[loan] SET loan_date=GETDATE(),for_how_long=";
var CONFIRM1=",accepted=1 WHERE id=";
var RETURN_BOOK="UPDATE [dbo].[loan] SET return_date=GETDATE() WHERE id=";
var GET_LOAN="select * from [dbo].[Loan] l where l.id="
var GET_WAITING="select u.f_name, u.l_name, u.email,b.name from [dbo].[loan] l join [dbo].[User] u on l.id_borrower=u.id join [dbo].[Book] b on l.id_book=b.id where l.accepted=0 AND l.id_lender=";
var GET_LATING="select b.name,l.loan_date,l.for_how_long from [dbo].[loan] l join [dbo].[Book] b on b.id=l.id_book where l.return_date is null and DATEDIFF(day,  l.loan_date,GETDATE()) > l.for_how_long and l.id_borrower="


var dbConfig={
	server:"localhost\\SQLEXPRESS",
	port:1433,
	database:"smb_test",
	user:"sa",
	password:"123456"
};

LoanPersistence.prototype.askToLoan=function(loan){
  
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(ASK_BOOK+
				"("+
				"'"+loan.idBook+"'"+","+
				"'"+loan.idLender+"'"+","+
				"'"+loan.idBorrower+"'"+","+
				"0"+
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
LoanPersistence.prototype.confirm=function(confirm){
  
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(CONFIRM+confirm.forHowLong+CONFIRM1+confirm.id,
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

LoanPersistence.prototype.returnBook=function(id){
  
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(RETURN_BOOK+id,
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
LoanPersistence.prototype.getLoan = function(id){
	var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(GET_LOAN+id,
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

LoanPersistence.prototype.getallWaiting = function(id){
	var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(GET_WAITING+id,
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

LoanPersistence.prototype.getAllLating = function(id){
	var promise =  new Promise(function(resolve, reject) {
		var conn = new sql.Connection(dbConfig);
		var req = new sql.Request(conn);
		conn.connect(function(err){
			if(err){
				console.log(err+' error at connecting to database');
				return null;
			}
			console.log("success to connect");
			req.query(GET_LATING+id,
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



var loanPersistence = new LoanPersistence();
module.exports = loanPersistence;
