var bookPersistence = require('./../persistence/bookPersistence');

function BookService(){
	
};

BookService.prototype.getBook = function(id){
	var promise =  new Promise(function(resolve, reject) {
			bookPersistence.getBook(id).then(function(book){
				resolve(book);
			});
		});
	return promise;
};
BookService.prototype.addBook=function(book){
	bookPersistence.addBook(book);
};

BookService.prototype.deleteBook=function(id){
	bookPersistence.deleteBook(id);
};

BookService.prototype.getAllBooks=function(userId){
	var promise =  new Promise(function(resolve, reject) {
			bookPersistence.getAllBooks(userId).then(function(books){
				console.log("in BookService"+books.length)
				resolve(books);
			});
		});
	return promise;
};

BookService.prototype.search=function(term){
	var promise =  new Promise(function(resolve, reject) {
			bookPersistence.search(term).then(function(books){
				resolve(books);
			});
		});
	return promise;
};

BookService.prototype.searchInPublicLibrary=function(term){
	var promise =  new Promise(function(resolve, reject) {
			bookPersistence.searchInPublicLibrary(term).then(function(books){
				resolve(books);
			});
		});
	return promise;
};

BookService.prototype.searchInMyLibrary=function(term,userId){
	var promise =  new Promise(function(resolve, reject) {
			bookPersistence.searchInMyLibrary(term,userId).then(function(books){
				resolve(books);
			});
		});
	return promise;
};

var bookService = new BookService();
module.exports = bookService;
