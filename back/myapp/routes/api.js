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
        name:req.body.username
    },function(error,data){
        if(data){
            res.send(false);
        }else{
            dbhandler.user.create({
                name:req.body.username,
                password:req.body.password,
                library : [
                     {
                            name: '香肠',
                            price : '20'
                    },
                    {
                        name : '火腿肠',
                        price : '1.0'
                    },
                     {
                        name : '玉米肠',
                        price : '1.5'
                    },
                     {
                        name : '鱼肉肠',
                        price : '2.0'
                    },
                     {
                        name : '鸡肉肠',
                        price : '1.0'
                    }

                ]
            },function(error,result){
                if(!error){
                    res.redirect("/"); //重定向
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
router.get('/cart',function (req,res,next) {
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    dbhandler.user.findOne({
        name : str1.sessionStorage
    },function(error,data){
        if(data){
            res.send(data.library);
        }else{
            return 
        }
    })
});
router.get('/list',function (req,res){
    console.log("req.url : " + req.url)
    console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    console.log(str1);
    spider('/a_api/index/list?wp=' + str1.wp +'&sort=' + str1.sort ,function (data) {
        res.send(data);
    })   
});

router.get('/dp', function (req, res) {
    console.log(111);
    var str = url.parse(req.url).query;
        console.log(str);
    var str1 = querystring.parse(str);
        console.log(str1);
        console.log('/a_api/index/dp?cid='+ str1.cid +'&pid='+ str1.pid +'&sort=' + str1.sort )

    spider('/a_api/index/dp?cid='+ str1.cid +'&pid='+ str1.pid +'&sort=' + str1.sort ,function (data) {
        res.send(data);
    })
});

router.get('/type',function (req,res){
    console.log("req.url : " + req.url)
    console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    console.log(str1);
     spider('/a_api/list?type=' + str1.type  ,function (data) {
                res.send(data);
            })  
});


router.get('/detail', function (req, res) {
    console.log(111);
    var str = url.parse(req.url).query;
        console.log(str);
    var str1 = querystring.parse(str);
        console.log(str1);
        // console.log('/a_api/index/dp?cid='+ str1.cid +'&pid='+ str1.pid +'&sort=' + str1.sort )

    spider('/a_api/index/detailData?itemId='+ str1.itemId +'&activityId='+ str1.activityId,function (data) {
        res.send(data);
    })
});
module.exports = router;