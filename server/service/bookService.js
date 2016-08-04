var bookPersistence = require('./../persistence/bookPersistence');

function BookService(){
	
};

BookService.prototype.getBook = function(id){
	var promise =  new Promise(function(resolve, reject) {
		var defaultBookId = '123';
		if(id){
			bookPersistence.getBook(id).then(function(book){
				resolve(book);
			});
		}else{
			bookPersistence.getBook(defaultBookId).then(function(book){
				resolve(book);
			});
		}
	});
	return promise;
};

var bookService = new BookService();
module.exports = bookService;
