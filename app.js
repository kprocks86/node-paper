var express = require('express');
var keyListnerMain = require('./key-listner');
var app=express();
app.set('view engine','ejs');

keyListnerMain(app);
app.use(express.static('./public'));

app.listen(5000);
console.log('listen to the port:5000');
