var bookService = require('./../service/bookService');

module.exports = function (server) {
    //create
    server.get('/book', function (req, res) {
        var book = bookService.getBook();
        res.status(201).json(book);
    });
};