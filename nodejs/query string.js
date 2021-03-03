var  express  =require('express'  ) ; 
var  app =  express() ; 

app.set('view engine' ,'ejs' ) ; 

app.get('/' , function( req , res ) {

    console.log( "request was  made "  +req.url )  ; 
    res.render('index')  ; 

}) ;
app.get('/contact' , function( req , res ) {

    console.log( "request was  made "  +req.url )  ;
    console.log(req.query)  ; 
    res.render( 'contact' ,  {  qs: req.query}) ; 
    




}) ;

app.get( '/profile/:name'  ,  function(req, res ) {
    console.log( "last"  + req.url ) ; 
    // res.send( "requested " +  req.params.name ) ; 
    console.log( "bruh : "  +  req.query ) ; 
    var  data  =  {age: 27, job: 'bekar', bal :['brus' ,  'any '] }  ;
    res.render('profile' ,{person : req.params.name  ,data:data  }  )  ;
 
})

app.listen(  3002)  ; 
