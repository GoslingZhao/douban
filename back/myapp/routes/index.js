var express = require('express');
var router = express.Router();
var url = require('url');
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.cookie);//往前端设置cookie

	res.cookie("lixi","ok");//获取到前端的cookie
  res.render('index', { title: 'Express' });
  // if(req.session.zlz ==true){

  //   dbhandler.article.find({},function(error,result){
  //       console.log(result);
  //       if(result.length==0){
  //         res.render('index', { title: '文章列表页面' ,isShow:true,datalist:[]});
  //       }else{
  //         res.render('index', { title: '文章列表页面',isShow:false,datalist:result });
  //       }

  //   })



  // }else{
  //   res.redirect("/login");
  // }
});
module.exports = router;





