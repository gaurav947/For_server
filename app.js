var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("My service is actived");
})

app.listen(3005,function(err,rs){
    console.log("PORT IS ACTIVATED");
})