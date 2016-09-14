var sql=require('mssql');

function LoanPersistence(){
	
};

var ASK_BOOK="insert into [dbo].[Loan] ([id_book],[id_lender],[id_borrower],[accepted]) values ";
var CONFIRM="UPDATE [dbo].[loan] SET loan_date=GETDATE(),for_how_long=";
var CONFIRM1=",accepted=1 WHERE id=";
var RETURN_BOOK="UPDATE [dbo].[loan] SET return_date=GETDATE() WHERE id=";
var GET_LOAN="select * from [dbo].[Loan] l where l.id="
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



var loanPersistence = new LoanPersistence();
module.exports = loanPersistence;
