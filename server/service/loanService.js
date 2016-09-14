
var loanPersistence = require('./../persistence/loanPersistence');


function LoanService(){
	
};

LoanService.prototype.askToLoan=function(loan){
	loanPersistence.askToLoan(loan);
};

LoanService.prototype.confirm=function(confirm){
	loanPersistence.confirm(confirm);
};

LoanService.prototype.returnBook=function(id){
	loanPersistence.returnBook(id);
};
LoanService.prototype.getLoan = function(id){
	var promise =  new Promise(function(resolve, reject) {
			loanPersistence.getLoan(id).then(function(loan){
				resolve(loan);
			});
		});
	return promise;
};


var loanService = new LoanService();
module.exports = loanService;