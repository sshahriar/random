var http =  require('http'  ) ;  
var fs =  require( 'fs') ;    // file stream module 


var myReadStream = fs.createReadStream( __dirname +  '/readme.txt' ,'utf8' )  ;  //  dir  name , data type  

myReadStream.on ('data' , function( chunk ) {
    console.log('new chunk received' ) ; 
    console.log(chunk  ) ;
    
})  ; 

