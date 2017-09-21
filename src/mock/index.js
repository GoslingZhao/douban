import Mock from 'mockjs';

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


