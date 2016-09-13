
var loanPersistence = require('./../persistence/loanPersistence');


function LoanService(){
	
};

BookService.prototype.addBook=function(loan){
	loanPersistence.askToLoan(loan);
};

var loanService = new LoanService();
module.exports = loanService;