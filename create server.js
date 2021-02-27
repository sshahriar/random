var  http = require('http') ;   //  module  

var server =  http.createServer(function(req,res){
    
    console.log('request was made ' + req.url ) ;

    res.writeHead(200,{'Content-Type': 'text/plain' }) ; // ( status ok or not , {content type } )
    
    res.end('hello  !! ') ; 
}) ; 


server.listen(3002 ,'127.0.0.1') ;  // listen( port number , ip address )
console.log('listening to port 3000 ' )  ; 

