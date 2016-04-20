/**
 * Created by mario on 4/12/2016.
 */
//Imports
"use strict";
var mongoose = require("mongoose");
var Schemes= require("./../Schemes");

//Database Connection

var databaseURL= 'mongodb://localhost:27017/isrCalculator';
var connection = mongoose.createConnection(databaseURL);

//Object to import initialization
var userDAO= module.exports={};
var UserModel = connection.model("User", Schemes.User);

userDAO.validateUser = function (name, password,callback){
  "use strict";
  UserModel.findOne({name:name,password:password}, function(err,user){
    if (!err && user ){
      callback(user);
    }else{
      callback(null)
    }
  });
};



