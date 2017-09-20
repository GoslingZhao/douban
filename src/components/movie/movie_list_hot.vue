<template>
	<div id="movieHot">
		<ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
			<li v-for="movie in movieLists" @click="getMovieDetail(movie.id)">
				<img :src="movie.images.large"/>
				<h3>{{movie.title}}</h3>
				<p><span v-for="genre in movie.genres">{{genre}}</span>({{movie.title}})(平均{{movie.rating.average}}分)</p>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll);
export default {

  name: 'movie_list_hot',

  data(){
  	return {
      scrContainer: null,
      scrContent: null,
  		eleH: 0,
  		spinnerFlag: true,
  		movieLists: [],
  		busy: false,
      loading:false,
      current:0,
      total:0,
      text:"正在加载中"
  	}
  },
  mounted(){
  	axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?count=10&start=${this.current}').then(res=>{
      this.movieLists = res.data.subjects;
      // this.total = res.date.total;
    })
  },
  methods: {
    getMovieDetail(id){
      this.$router.push({ name: 'movie-detail', params: { id: id }})
    },
	loadMore: function() {
  	  if(this.busy){
  	  	 return;
  	  }
      var start = this.movieLists.length;
      this.busy = true;
      this.spinnerFlag = true;
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters?count=10&start='+start)
		  .then(function(res) {
		  	console.log(res);
		    res.data.subjects.forEach(movie=>{
		    	this.movieLists.push(movie);
		    })
		    this.busy = false;
	  		this.spinnerFlag = false;
		  }.bind(this))
		  .catch(function (error) {
		    console.log(error);
		  });
    }
  }
}
</script>

<style lang="scss" scoped>
#movieHot{
	padding: 1.12rem 0 0.6rem;
}
li{
	overflow: hidden;
	padding: 0.1rem;
	font-size: 0.14rem;
	border-bottom: 1px solid #ccc;
	margin: 0 0.16rem;
	border-bottom: 1px solid #ccc;
	text-align: left;

	img{
		float: left;
		width: 0.4rem;
		border-radius: 50%;
		margin-right: 0.2rem;
	}
}
</style>