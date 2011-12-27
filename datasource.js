var mongoose = require('mongoose');
mongoose.connect('mongodb://USER:PASS@staff.mongohq.com:PORT/DB');

var Group = new mongoose.Schema({
    name    :   String,
    users   :   [String]
}),
    User = new mongoose.Schema({
    name    :   String,
    groups  :   [String]
});

exports.mon = {
    module  :   mongoose,
    Group   :   mongoose.model('Group',Group),
    User    :   mongoose.model('User',User)
};