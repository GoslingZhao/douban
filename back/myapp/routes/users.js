var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var spider = require("../API/api");
var url = require('url');
/* GET users listing. */
var i = 0;


console.log(2222222);
// 主页，百货，美妆，美食，女装，鞋包，母婴，手机数码，饰品，男装，内衣，其他
router.get('/dp', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    spider('/a_api/index/dp?cid='+ str1.cid +'&pid='+ str1.pid +'&sort=' + str1.sort ,function (data) {

    	res.send(data);
    })
});
router.get('/list',function (req,res){
    res.header('Access-Control-Allow-Origin','*');
    console.log("req.url : " + req.url)
    console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    console.log(str1);
    spider('/a_api/index/list?wp=' + str1.wp +'&sort=' + str1.sort ,function (data) {
        res.send(data);
    })
});




// router.get('/page' + (++i),function (req,res){
//     res.header('Access-Control-Allow-Origin','*');
//     spider('/a_api/index/list?wp=eyJwYWdlIjozLCJzb3J0IjoiNiIsImNpZCI6IiIsInNlYXJjaCI6IiIsInR5cGUiOiIifQ%3D%3D&sort=6&_path=9001.CA.0',function (data) {
//         res.send(data);
//     })
// });



// router.get('/page' + (++i)   ,function (req,res){
//     res.header('Access-Control-Allow-Origin','*');
//     spider('/a_api/index/list?wp=eyJwYWdlIjo' + (i - 4) + 'LCJzb3J0IjoiNiIsImNpZCI6IiIsInNlYXJjaCI6IiIsInR5cGUiOiIifQ%3D%3D&sort=6&_path=9001.CA.0',function (data) {
//         res.send(data);
//     })
// });

module.exports = router;

