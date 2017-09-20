<template>
	<div id="movieComing">
		<ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="false"
    >
			<li v-for="movie in movieLists" @click="getMovieDetail(movie.id)">
				<img :src="movie.images.large"/>
				<h3>{{movie.title}}</h3>
				<p><span v-for="genre in movie.genres">{{genre}}</span>({{movie.year}})(平均{{movie.rating.average}}分)</p>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios"
import Vue from 'vue'
import { InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll);
export default {

  data(){
  	return {
      scrContainer: null,
      scrContent: null,
  		eleH: 0,
  		spinnerFlag: true,
  		movieLists: [],
  		busy: false
  	}
  },
  computed:{
    spinnerClass(){
      return this.$store.getters.SPINNER_CLASS
    }
  },
  mounted:function(){
  	this.scrContainer = this.$el;
    this.scrContent = this.$el.querySelector(".j-content")
    // this.eleH = this.scrContent.offsetHeight;
    console.log(this.loadMore());
    this.scrContainer.addEventListener('scroll', function(e){
      if(this.isTouchScreenBtm(e)){
        this.loadMore();
      }
    }.bind(this))
  },
  watch: {
  	movieLists: function(){
  		setTimeout(function(){
        // this.eleH = this.scrContent.offsetHeight;
      }.bind(this),1000)
  	}
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
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/top250?count=10&start='+start)
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
#movieComing{
	padding: 1.12rem 0 0.6rem;
}
li{
	overflow: hidden;
	padding: 0.1rem;
	color: black;
	font-size: 0.14rem;
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