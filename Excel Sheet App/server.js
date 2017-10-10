const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const xlsx = require("xlsx");
//MongoDB
const mongocli = require("mongo-client");
var uuid = require("node-uuid")
var assert = require("assert")
var fold = require("reducers/fold")
var expand = require("reducers/expand")
var mongo = require("mongo-client")
var insert = require("mongo-client/insert")
var findOne = require("mongo-client/findOne")
var close = require("mongo-client/close")

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var rptBn = require('./modules/Beans/reportBean');
var objKeyCompare = require('./modules/ObjectUtilities/objectKeyComparator');

//Developer Note : Homepage redirect
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Getting all members by team 
//Developer Note : Pass the team name in JSON object
//Returns : JSON object
app.get('/getallmembers', function (req, res) {

});

//Add Team
//Developer Note : Pass the new team details in JSON object 
//Returns : JSON object
app.put('/addteam', function (req, res) {

});

//Add Manager
//Developer Note : Pass the new manager details in JSON object
//Returns : JSON object
app.put('/addmanager', function (req, res) {

});

//Add Member
//Developer Npte : Pass the new team member details in JSON object
//Returns : JSON object
app.put('/addmember', function (req, res) {

});

//Set email recipient 
//Developer Note : Email recipients can be more than one 
//Returns : JSON object
app.post('/setemailrecipient', function (req, res) {

});

//Send Email
//Returns : JSON object
app.post('/sendEmail', function (req, res) {

});

app.post('/submitSheet',jsonParser,function(req,res){
    res.setHeader('Content-Type', 'application/json');
     if (!req.body){
        res.send(JSON.stringify({'Error':'No input detected!'}));
     } 
    else if(req.body==null){
        res.send(JSON.stringify({'Error':'Null input'}));
    }
    else if(req.body==undefined){
        res.send(JSON.stringify({'Error':'Invalid input'}));
    }
    else if(req.body==''){
        res.send(JSON.stringify({'Error':'Empty input'}));
    }
    else{
        //res.send(JSON.stringify(objKeyCompare.objectKeysComparator(req.body,rptBn)));     
        if(objKeyCompare.objectKeysComparator(req.body,rptBn)){
            //res.send(JSON.stringify({'Error':'Valid input'}));
        }
        else{
            res.send(JSON.stringify({'Error':'Invalid input'}));
        }
    }
});

app.get('/getSampleReportBean',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(rptBn)); 
});
app.get('/getSampleEmployeeBean',function(req,res){
	var employee = require('./modules/Beans/employeeBean');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(employee)); 
});
//Developer Note : Change port settings  
app.listen(3000, function () {
    console.log('Excel app listening on port 3000!')
})


