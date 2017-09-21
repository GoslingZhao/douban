import Mock from 'mockjs';
/*API-Login-登录接口模拟*/
var login = Mock.mock("/api/login",{
  "msg":"登录成功",          //登录成功过信息
  "code": 0,                 //正常          
  "time": 240000              //有效期4分钟
})

/*API-movie*/
var movie = Mock.mock("/api/movie",{
  "rating": {
    "max": 10,
    "average": 9.6,
    "stars": "50",
    "min": 0
  },
  "alt": "https://movie.douban.com/subject/1292052/",
  "id": "1292052"
})

/*API-music*/
var music = Mock.mock("/api/music",{
	'list|1-10': [{
        'id|+1': 1
    }]
})



export default {
	movie,
	music
}


