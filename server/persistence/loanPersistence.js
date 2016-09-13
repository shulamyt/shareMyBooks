var sql=require('mssql');

function LoanPersistence(){
	
};

var ASK_BOOK="insert into [dbo].[Loan] ([id_lender],[id_borrower] values ";

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
				"'"+loan.idLender+"'"+","+
				"'"+loan.idBorrower+"'"+
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

var loanPersistence = new LoanPersistence();
module.exports = loanPersistence;
