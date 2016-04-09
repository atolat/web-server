var PORT = 3000;
var express = require('express');
var app = express();

var middleware = {
    requireAuthentication: function(req,res, next){
        console.log('Private Route Hit!');
        next();
    },
    logger: function(req,res,next){
        console.log('Request:' +new Date().toString() +' '+req.method+' '+req.originalUrl );
        next();
    }
}

app.use(middleware.logger);

app.get('/',function(req, res){
    res.send('Hello Express!');
});

app.get('/about',function(req, res){
    res.send('About US');
});

app.use(express.static(__dirname+'/public')); //Sets up static web serve, Takes the folder you want to expose

app.listen(PORT, function(){
    console.log('Express server started on port: '+PORT);
});

