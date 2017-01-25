/**
 * Created by zhannalibman on 25/01/2017.
 */
var express = require('express');
//var path = require('path');
var server = express();
var cache = [];

server.get('/', function (req, res) {
    res.sendFile("/Users/zhannalibman/targilim/jsBootcampDay9/index.html");
});

server.use('/', express.static(_dirname));
//server.use('/static', express.static(path.join(_dirname, 'static')));

server.use('/form', function(req, res, next){
    console.log('Someone try to access to /form');
    next();
});
server.get('/form', function (req, res) {
    const fieldsNotFilled = areAllFieldsFilled(req.query);
    if (fieldsNotFilled.length > 0){
        var response = "Not all fields are filled: ";
        for (var i = 0; i < fieldsNotFilled.length; i++){
            var comma = i === fieldsNotFilled.length - 1 ? "" : " ,";
            response += fieldsNotFilled[i] + comma;
        }
        res.status(500).send(response);
    } else {cache.push(req.query);
        res.status(200).send(cache);
    }
});

server.listen(8080, function () {
    console.log('Example server listening on port 8080');
});

function areAllFieldsFilled(query){
    var notFilled = [];
    if(query.fullName.length == 0){
        notFilled.push("Full name");
    }
    if(query.password.length == 0){
        notFilled.push("Password");
    }
    if(query.pet === undefined){
        notFilled.push("Pets");
    }
    if(query.about.length == 0){
        notFilled.push("About");
    }
    return notFilled;

}
function next(){

}
