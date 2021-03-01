var http =  require('http'  ) ;  
var fs =  require( 'fs') ; 


var myReadStream = fs.createReadStream( __dirname +  '/readme.txt' ,'utf8' )
var myWriteStream = fs.createWriteStream( __dirname +  '/writeme.txt' ,'utf8')

myReadStream.on ('data' , function( chunk ) {
    console.log('new chunkn received' ) ; 
    console.log(chunk  ) ; 
    myWriteStream.write( chunk ) ;   // writes  chunk received  to writeme.txt 

})  ; 






 
