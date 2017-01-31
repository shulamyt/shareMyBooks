var bookService = require('./../service/bookService');

module.exports = function (server) {

    server.get('/books/search', function (req, res) {
        console.log(req.query.query,req.query.userId);
        bookService.search(req.query.query,req.query.userId).then(function(books){
            console.log(books);
            res.status(201).json(book);
        });
    });
    server.get('/books/getAll/:userId', function (req, res) {
        bookService.getAllBooks(req.params.userId).then(function(books){
            console.log(books);
            res.status(201).json(book);
        });
    });
    server.get('/books/:id', function (req, res) {
        bookService.getBook(req.params.id).then(function(book){
            console.log(book);
            res.status(201).json(book);
        });
    });

    server.post('/books', function (req, res) {
        bookService.addBook(req.body.book);
    });

    server.delete('/books',function(req,res){
        bookService.deleteBook(req.body.id);
    });


};