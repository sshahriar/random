
var fs =  require( 'fs') ; 
var  http = require('http') ; 

var server =  http.createServer(function(req,res){
    console.log('request was made ' + req.url ) ;
    //  writehead( status ok or not , {content type } )
    
    if( req.url ==  '/home'   ) {
        res.writeHead(200,{'Content-Type': 'text/html' }) ; 

        var myReadStream  = fs.createReadStream( __dirname +'/index.html'   ) ;  
        myReadStream.pipe(res) ;  

    }  else {
        
        res.writeHead(200,{'Content-Type': 'application/json' }) ; 

        var myObj =  {
            name: 'sn'  , 
            job: 'sfgds'  , 
            age: '26' ,  
        } ; 

        res.end(JSON.stringify(  myObj  )   ) ;     
    }

}) ; 



 // listen( port number , ip address )
server.listen(3002 ,'127.0.0.1') ;
console.log('listening to port 3002 ' )  ;


// var http =  require('http'  ) ;  
// var fs =  require( 'fs') ; 
// var myReadStream = fs.createReadStream( 
//     __dirname +  '/readme.txt' ,'utf8'
// )
// var myWriteStream = fs.createWriteStream( 
//     __dirname +  '/writeme.txt' ,'utf8'
// )

// myReadStream.pipe(myWriteStream )  ; 
