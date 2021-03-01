
var fs =  require( 'fs') ; 
var  http = require('http') ; 

var server =  http.createServer(function(req,res){
    console.log('request was made ' + req.url ) ;
    //  writehead( status ok or not , {content type } )
    res.writeHead(200,{'Content-Type': 'text/html' }) ; 


    var myObj =  {
        name: 'sn'  , 
        job: 'sfgds'  , 
        age: '25' ,  
    } ; 

    res.end(JSON.stringify(  myObj  )   ) ; 
    

}) ; 
