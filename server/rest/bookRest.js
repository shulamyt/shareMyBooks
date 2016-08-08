var bookService = require('./../service/bookService');

module.exports = function (server) {
//create
    server.get('/book', function (req, res) {
        bookService.getBook().then(function(book){
            console.log(book);
            res.status(201).json(book);
        });
    });

    //create
    server.post('/book', function (req, res) {
        console.log(req.body);
        bookService.getBook().then(function(book){
            console.log(book);
            res.status(201).json(book);
        });
    });
};