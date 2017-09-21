var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var spider = require('../API/api.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: '注册页面' });
});

router.post("/register",function(req,res,next){
    //req.body 接受前端的post请求；

    console.log(req.body);
    //将用户名存入数据库 mongodb  <= mongoose模块

    //利用dbhandler.user  ,先find 查找是否有同名用户邮箱，
    dbhandler.user.findOne({
        name:req.body.username,
    },function(error,data){
        if(data){
            res.send(false);
        }else{
            dbhandler.user.create({
                name:req.body.username,
                password:req.body.password,
            },function(error,result){
                if(!error){
                    res.redirect("/");
                }else{
                    console.log(error);
                }
            }) 
        }
    })
    
})

router.get('/', function(req, res, next) {
    res.render('login', { title: '登录页面',isShow:false });
});

router.post("/login",function(req,res){
    //req.body
    //findone 如果匹配到 ，返回的是对象， find如果匹配到返回的是数组
    dbhandler.user.findOne({
        name:req.body.name,
        password:req.body.password
    },function(error,data){
        console.log(data);
        if(data){
            console.log("success");
            //验证用户名和密码正确，将sessionid 对象的session 设置为有效
            // req.session.zlz = true;

            res.cookie("name",data.name);
            res.redirect("/");
        }else{
            res.render('login', { title: '登录页面',isShow:true });
        }
    })
});
module.exports = router;