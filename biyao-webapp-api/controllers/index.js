var express = require('express');
var router = express.Router();
const biyaoindex = require("../models/biyaoindex")
const biyaotype =require("../models/biyaotype")
const biyaoserver =require("../models/biyaoserver")
const biyaocart =require("../models/biyaocart")

router.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
})

/* GET home page. */
router.get("/biyaoindex",(req,res)=>{
  let data=biyaoindex.getData();
  res.json(data);
})

router.get("/biyaotype",(req,res)=>{
  let data=biyaotype.gettypeData();
  res.json(data);
})

router.get("/biyaoserver",(req,res)=>{
  let data=biyaoserver.getServer();
  res.json(data);
})

router.get("/biyaocart",(req,res)=>{
  let data=biyaocart.getData();
  res.json(data);
})
module.exports = router;
