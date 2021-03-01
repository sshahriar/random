var  express  =require('express'  ) ; 
var  app =  express() ; 


app.get('/x' , function( req , res ) {

    console.log( "request was  made "  +req.url )  ;
    res.sendFile(__dirname + '/index.html' ) ; 
}) ;
app.get('/home' , function( req , res ) {

    console.log( "request was  made "  +req.url )  ;
   res.send('forkn '  ) ; 
}) ;
app.get( '/profile/:id'  ,  function(req, res ) {
    console.log( "last"  + req.url ) ; 
    res.send( "requested " +  req.params.id ) ; 




})

app.listen(  3002)  ; 
