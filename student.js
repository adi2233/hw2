var express=require('express');
var app=express();
var stud=require('./students');
var fs=require('fs');


module.exports = function(app) {
   app.get('/getAllExcellenceStudent', function(req,res) {
          var dtudentDetails=new Array();
          for(var i=0;i<stud.length;i++){
            if(stud[i].grade>89){
               console.log('name:' + stud[i].name + '\r\n' + 'grade:' + stud[i].grade);
                dtudentDetails.push('name:' + stud[i].name + '\r\n' + 'grade:' + stud[i].grade);              
            }
       }
       res.json(dtudentDetails);
    })
   
   app.get('/getStudGrade/:id', function(req, res) {
          var dtudentDetails=new Array();
          for(var i=0;i<stud.length;i++){
              var idStud=req.params.id;
            if(stud[i].id==idStud){
              console.log('name:' + stud[i].name +'\r\n'+ 'id:' + stud[i].id);
                dtudentDetails.push('name:' + stud[i].name +'\r\n'+ 'id:' + stud[i].id);
            }
       }
        res.json(dtudentDetails);
    })
   

   app.get('/getExcellenceByYear/:year', function(req, res) {
          var dtudentDetails=new Array();
          for(var i=0;i<stud.length;i++){
              var yearStud=req.params.year;
            if(stud[i].year==yearStud && stud[i].grade>89){
              console.log('name:' + stud[i].name +'\r\n'+ 'id:' + stud[i].id + '\r\n'+ 'grade:' + stud[i].grade);
                dtudentDetails.push('name:' + stud[i].name +'\r\n'+ 'id:' + stud[i].id + '\r\n'+ 'grade:' + stud[i].grade);
            }
       }
        res.json(dtudentDetails);
    })
  };
 