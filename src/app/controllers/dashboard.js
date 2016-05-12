/**
 * Created by mario on 4/14/2016.
 */
var express = require('express');
var router = express.Router();
var assert= require("assert");
var employeesDAO= require("../models/dao/EmployeesDAO");
var commonOperations = require("../utils/CommonOperations");
var moment= require("moment");

router.get("/",function(req,res,next){
  "use strict";
  var employees= employeesDAO.findAll(function (error, employees){
    if(error){

    }else{
      res.render("dashboard/index",{employees:employees});
    }
  });
});

router.post("/",function(req,res,next){
  "use strict";
  var employeeId=req.body.employee;
  var absences= req.body.absences;
  employeesDAO.findById(employeeId,function (error, employee){
    if(error) res.send(error);
    var employeeAntiquity= (moment().subtract(employee.hiringDate.getFullYear(),"years")).year() ;
    var isr =commonOperations.calculateISR(employee.workingDays,employee.dailySalary,employeeAntiquity,absences);
    var imss =commonOperations.calculateIMSS(employee.dailySalary,employee.workingDays,absences,employeeAntiquity);
    
  });
});

module.exports = router;