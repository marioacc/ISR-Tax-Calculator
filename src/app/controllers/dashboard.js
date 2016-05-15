/**
 * Created by mario on 4/14/2016.
 */
var express = require('express');
var router = express.Router();
var assert= require("assert");
var employeesDAO= require("../models/dao/EmployeesDAO");
var commonOperations = require("../utils/ImssPayment");
var moment= require("moment");
var pdf = require('phantom-html2pdf');
var jade = require("jade");
var escape=require("escape-html");
var htmlToPdf=require("html-to-pdf");
var conversion = require("phantom-html-to-pdf")();
var calculatePay= require("../utils/CalculatePay");

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
  var absences= parseInt(req.body.absences);
  employeesDAO.findById(employeeId,function (error, employee){
    if(error) res.send(error);
    var htmlToPdf= calculatePay.calculatePay(employee,absences,employee.dailySalary,employee.workingDays);

    conversion({ html: htmlToPdf }, function(err, pdf) {
      console.log(pdf.logs);
      console.log(pdf.numberOfPages);
      pdf.stream.pipe(res);
    });
  });
});

module.exports = router;