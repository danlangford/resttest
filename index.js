// environment specific constants
var IPADDY = '0.0.0.0', PORT = process.env.PORT;

// requires (e.g. imports)
require('sugar');
var app = require('express').createServer(),
    mon = require('./datasource').mon;

// setup
app.enable("jsonp callback");
app.listen(PORT);

app.get("/groups/", function(req, res) {
    mon.Group.find({},function(err,docs){
        res.json(docs);
    });
});

app.get("/groups/:name", function(req, res) {
    mon.Group.findOne({name:req.params.name},function(err,doc){
        doc ?
            res.json(doc) :
            res.json('group not found',404) ;
    });
});

app.get("/users/", function(req, res) {
    mon.User.find({},function(err,docs){
        res.json(docs);
    });
});

app.get("/users/:name", function(req, res) {
    mon.User.findOne({name:req.params.name},function(err,doc){
        doc ?
            res.json(doc) :
            res.json('user not found',404) ;
    });
});