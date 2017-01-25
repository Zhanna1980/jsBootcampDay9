/**
 * Created by zhannalibman on 25/01/2017.
 */
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.sendFile("/Users/zhannalibman/targilim/jsBootcampDay9/index.html");
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080')
})
