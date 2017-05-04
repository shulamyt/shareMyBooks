var bookService = require('./../service/bookService');

module.exports = function (server) {

    //search for a book in pulic library
    server.get('/books/search', function (req, res) {
        console.log(req.query.tirm);
        bookService.search(req.query.tirm).then(function(books){
            console.log(books);
            res.status(201).json(book);
        });
    });

    //search for a book in personal library
    server.get('/books/searchInMyLibrary', function (req, res) {
        console.log(req.query);
        bookService.searchInMyLibrary(req.query.tirm,req.query.userId).then(function(books){
            console.log(books);
            res.status(201).json(book);
        });
    });

    //get all my books
    server.get('/books/getAll/:userId', function (req, res) {
        bookService.getAllBooks(req.params.userId).then(function(books){
            console.log(books);
            res.status(201).json(book);
        });
    });

    //get book by book id
    server.get('/books/:id', function (req, res) {
        bookService.getBook(req.params.id).then(function(book){
            console.log(book);
            res.status(201).json(book);
        });
    });

    //add book
    server.post('/books', function (req, res) {
        bookService.addBook(req.body.book);
    });

    //delete book
    server.delete('/books',function(req,res){
        bookService.deleteBook(req.body.id);
    });
};