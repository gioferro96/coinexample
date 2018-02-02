var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.all('/',function(req,res){
	res.sendFile('home.html', {root: __dirname });
});



//listen in a specific port
app.listen(port);

//check status
console.log('Server running at http://localhost:' + port);