var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var student=require('./student');
var stud=require('./students');



student(app);


app.listen(port);
console.log('listening on port'+port);
