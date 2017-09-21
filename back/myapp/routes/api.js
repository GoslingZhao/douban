var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var spider = require('../API/api.js');
/* GET home page. */


//注册
router.post('/register',function(req,res,next){
    dbhandler.user.findOne({
        name:req.body.name,
        password:req.body.password
    },function(error,data){
        if(data){
            res.send(false);
        }else{
            dbhandler.user.create({
                name:req.body.name,
                password:req.body.password
            },function(error,data){
                if(!error){
                    res.send(true);
                }else{
                    res.send(false);
                }
            })
        }
    })
})


//登录
router.post('/login',function(req,res){
    // console.log(req.body)
    dbhandler.user.findOne({
        name:req.body.name,
        password:req.body.password
    },function(error,data){
        if(data){
            res.send(true);
        }else{
            res.send(false);
        }
    })
})
module.exports = router;