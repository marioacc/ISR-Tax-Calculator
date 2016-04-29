/**
 * Created by mario on 4/14/2016.
 */
var express = require('express');
var router = express.Router();
var assert= require("assert");

router.get("/",function(req,res,next){
  "use strict";
  res.render("dashboard/index",{});
});

module.exports = router;