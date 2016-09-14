
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

LoanService.prototype.getallWaiting=function(userId){
	var promise =  new Promise(function(resolve, reject) {
			loanPersistence.getallWaiting(userId).then(function(loans){
				resolve(loans);
			});
		});
	return promise;
};

LoanService.prototype.getAllLating=function(userId){
	var promise =  new Promise(function(resolve, reject) {
			loanPersistence.getAllLating(userId).then(function(loans){
				resolve(loans);
			});
		});
	return promise;
};

var loanService = new LoanService();
module.exports = loanService;