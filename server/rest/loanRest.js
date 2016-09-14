var loanService = require('./../service/loanService');

module.exports = function (server) {

    //ask to loan a book
    server.post('/loans', function (req, res) {
        loanService.askToLoan(req.body.loan);
    });

    //return a book
    server.put('/loans/return',function(req,res){
        loanService.returnBook(req.body.id);
    });

    //confirm the request
    server.put('/loans',function(req,res){
        loanService.confirm(req.body.confirm);
    });

    //get list of books that are waiting to confirm
    server.get('/loans/waiting/:idUser',function(req,res){

        loanService.getallWaiting(req.params.idUser).then(function(loans){
            console.log(loans);
            res.status(201).json(loans);
        });

    });

    //get list of books that you're late return 
    server.get('/loans/late/:idUser',function(req,res){
        loanService.getAllLating(req.params.idUser).then(function(loans){
            console.log(loans);
            res.status(201).json(loans);
        });

    });

    server.get('/loans/:id',function(req,res){
        loanService.getLoan(req.params.id).then(function(loan){
            console.log(loan);
            res.status(201).json(loan);
        });
    })

};
