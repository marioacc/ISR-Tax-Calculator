/**
 * Created by mario on 4/13/2016.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Models = module.exports ={};

//Create a parameter to set the role, a List<IEnumerable> in C#
Models.User = new Schema({
  name:{type:[String], index: true},
  password :String
});

Models.Employee =  new Schema({
  name: String,
  lastName: String,
  secondLastName: String,
  RFC: String,
  socialSecurityNumber: String,
  dailySalary: Number,
  hiringDate: Date
});


