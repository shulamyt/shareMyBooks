var loanService = require('./../service/loanService');

module.exports = function (server) {

    server.post('/loans', function (req, res) {
        loanService.askToLoan(req.body.loan);
    });

};