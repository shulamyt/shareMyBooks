var bookService = require('./../service/bookService');

module.exports = function (server) {
    //get all my books
    server.get('/books/getAll/:idUser',function(req,res){

        bookService.getAllBooks(req.params.idUser).then(function(books){
            console.log(books);
            res.status(201).json(books);
        });

    });

    //search for a book in pulic & in personal library
    server.get('/books/search',function(req,res){
        var g=req.query.term.split('~');
        bookService.search(g).then(function(books){
            console.log(books);
            res.status(201).json(books);
        });

    });

    //search for a book in personal library
    server.get('/books/searchInMyLibrary', function (req, res) {
        bookService.searchInMyLibrary(req.query.term,req.query.userId).then(function(books){
            var g=req.query.term.split('~');
            console.log(books);
            res.status(201).json(book);
        });
    });
    
    //search for a book in pulic library
    server.get('/books/searchInPublicLibrary', function (req, res) {
        bookService.searchInPublicLibrary(req.query.term,req.query.userId).then(function(books){
            var g=req.query.term.split('~');
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