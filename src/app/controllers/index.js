var express = require('express');
var router = express.Router();
var assert= require("assert");
var UsersDAO = require("../models/dao/UsersDAO");
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.isSigned){
    res.redirect('/dashboard');
  }else{
    res.render("index",{});
  }

});

router.post("/", function (req, res, next){
  "use strict";
  var name= req.body.name;
  var password = req.body.password;
  UsersDAO.findUserPassword(name,password,function(user){
    "use strict";
    if(user){
      res.cookie("isSigned", true );
      res.redirect('/dashboard');
    }else{
      res.redirect("/");
    }
  });
});




module.exports = router;
