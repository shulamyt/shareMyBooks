var bookPersistence = require('./../persistence/bookPersistence');

function BookService(){
	
};

BookService.prototype.getBook = function(id){
	var defaultBookId = '123';
	if(id){
		bookPersistence.getBook(id);
	}else{
		bookPersistence.getBook(defaultBookId);
	}
};

var bookService = new BookService();
module.exports = bookService;
