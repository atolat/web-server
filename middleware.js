// Middleware 

module.exports = {
    requireAuthentication: function(req,res, next){
        console.log('Private Route Hit!');
        next();
    },
    logger: function(req,res,next){
        console.log('Request:' +new Date().toString() +' '+req.method+' '+req.originalUrl );
        next();
    }
};