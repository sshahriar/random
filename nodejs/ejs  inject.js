var  express  =require('express'  ) ; 
var  app =  express() ; 

app.set('view engine' ,'ejs' ) ; 

app.get('/' , function( req , res ) {

    console.log( "request was  made "  +req.url )  ;
    res.sendFile(__dirname + '/index.html' ) ; 
}) ;
app.get('/home' , function( req , res ) {

    console.log( "request was  made "  +req.url )  ;
   res.send('this is home  '  ) ; 
}) ;
app.get( '/profile/:name'  ,  function(req, res ) {
    console.log( "last"  + req.url ) ; 
    // res.send( "requested " +  req.params.name ) ; 

    var  data  =  {age: 25, job: 'bekar' }  ;
    res.render('profile' ,{person : req.params.name  ,data:data  }  )  ;




})

app.listen(  3002)  ; 
