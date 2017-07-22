var express = require('express');
var keyListnerMain = require('./key-listner');
var app=express();
app.set('view engine','ejs');

keyListnerMain(app);
app.use(express.static('./public'));

app.listen(process.env.PORT,process.env.IP,function () {
	console.log('server just started!');
});
