/**
 * Created by mario on 4/14/2016.
 */
var express = require('express');
var router = express.Router();
var assert= require("assert");
var employeesDAO= require("../models/dao/EmployeesDAO");
var commonOperations = require("../utils/CommonOperations");

router.get("/",function(req,res,next){
  "use strict";
  var employees= employeesDAO.findAll(function (error, employees){
    if(error){

    }else{
      res.render("dashboard/index",{employees:employees});
    }
  });
});

router.get("/calculate",function(req,res,next){
  "use strict";
  var employeeId=req.body.employee;
  var absences= req.body.absences;
  
});

module.exports = router;