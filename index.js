// environment specific constants
var IPADDY = '0.0.0.0';
var PORT = process.env.PORT;

// requires (e.g. imports)
require('sugar')
var app = require('express').createServer();


// test data
var d = {
    groups: [{
        id: 901,
        name: 'the aardvarks'
    }, {
        id: 902,
        name: 'the bugz'
    }, {
        id: 903,
        name: 'the cloggers'
    }],
    users: [{
        id: 101,
        name: 'Al Anderson'
    }, {
        id: 102,
        name: 'Berry Benoit'
    }, {
        id: 103,
        name: 'Cory Copper'
    }]
};

// setup
app.enable("jsonp callback");
app.listen(PORT);


app.get("/groups/", function(req, res) {
    res.json(d.groups);
});

app.get("/groups/:id", function(req, res) {
    var group = d.groups.find(function(n) {
        return n.id == req.params.id;
    });
    group = group || { error: 'group not found' };
    res.json(group);
});

app.get("/users/", function(req, res) {
    res.json(d.users);
});

app.get("/users/:id", function(req, res) {
    var user = d.users.find(function(n) {
        return n.id == req.params.id;
    });
    user = user || { error: 'user not found' };
    res.json(user);
});