/**
 * Created by mario on 4/28/2016.
 */
var express = require('express');
var router = express.Router();
var EmployeesDAO = require("../models/dao/EmployeesDAO");
var assert= require("assert");


router.get("/",function(req,res,next){
  "use strict";
  EmployeesDAO.findAll(function(error,employees){
    if (error){
      console.log(error);
    }else{
      res.render("employee/index",{
        employees:employees
      });
    }
  });
});
router.get("/delete/:id",function(req,res,next){
  "use strict";
  EmployeesDAO.findById(req.params.id, function(err, employee){
    res.render("employee/delete",{
      employee:employee});
  });

});

router.post("/delete/:id",function(req,res,next){
  "use strict";
  EmployeesDAO.removeById(req.params.id,function(error,employees){
    if (error){
      console.log(error);
    }else{
      res.redirect("/employee");
    }
  });
});
router.get("/edit/:id",function(req,res,next){
  "use strict";
  EmployeesDAO.findById(req.params.id,function(error,employee){
    if (error){
      console.log(error);
    }else{
      res.render("employee/edit",{
        employee:employee
      });
    }
  });
});

router.post("/edit/:id",function(req,res,next){
  "use strict";
  var employee={
    name: req.body.name,
    lastName: req.body.lastName,
    secondLastName: req.body.secondLastName,
    RFC: req.body.RFC,
    socialSecurityNumber: req.body.socialSecurityNumber,
    dailySalary: req.body.dailySalary,
    hiringDate: req.body.hiringDate,
    workingDays:req.body.workingDays
  };
  EmployeesDAO.updateById(req.params.id,employee,function(error,employee){
    if (error){
      console.log(error);
    }else{
      res.redirect("/employee");
    }
  });
});
router.get("/create",function(req,res,next){
  "use strict";
  res.render("employee/create",{});
});

router.post("/",function(req,res,next){
  "use strict";
  var employee={
    name: req.body.name,
    lastName: req.body.lastName,
    secondLastName: req.body.secondLastName,
    RFC: req.body.RFC,
    socialSecurityNumber: req.body.socialSecurityNumber,
    dailySalary: req.body.dailySalary,
    hiringDate: req.body.hiringDate,
    workingDays:req.body.workingDays
  };
  EmployeesDAO.create(employee, function (error,employee){
    if(error){
      console.log(error)
    }else{
      res.redirect("/employee");
    }
  });
});
module.exports = router;