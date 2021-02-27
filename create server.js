var  http = require('http') ; 

var server =  http.createServer(function(req,res){
    console.log('request was made ' + req.url ) ;

    //  writehead( status ok or not , {content type } )
    res.writeHead(200,{'Content-Type': 'text/plain' }) ;
    res.end('hello  !! ') ; 
}) ; 
 // listen( port number , ip address )
server.listen(3002 ,'127.0.0.1') ;
console.log('listening to port 3000 ' )  ;

