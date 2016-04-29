/**
 * Created by mario on 4/28/2016.
 */
"use strict";
var mongoose = require("mongoose");
var Schemes= require("./Schemes");

//Database Connection

var databaseURL= 'mongodb://localhost:27017/isrCalculator';
var connection = mongoose.createConnection(databaseURL);

//Object to import initialization
var employeeDAO= module.exports={};
var EmployeeModel = connection.model("Employee", Schemes.Employee);

employeeDAO.create = function (employee, callback){
  "use strict";
  var Employee = new EmployeeModel(employee);
  Employee.save(callback);
};

employeeDAO.findAll = function (callback){
  "use strict";
  EmployeeModel.find({},callback);
};

employeeDAO.findById = function (id,callback){
  "use strict";
  EmployeeModel.findOne({_id:id},callback);
};

employeeDAO.removeById = function (userId,callback){
  "use strict";
  EmployeeModel.remove({"_id":userId},callback);
};

employeeDAO.updateById = function (userId,employee,callback){
  EmployeeModel.findByIdAndUpdate(userId,employee,callback);
};