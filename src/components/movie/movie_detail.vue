<template>
	<div id="movieDetail">
		<div class="top">
			<i class="iconfont icon-back" @click="handleBack"></i>
			<h2>飙升榜</h2>
		</div>
		<div class="cardHeader">
				<img :src="movieDetail.images ? movieDetail.images.large : ''">
				<h2 class="md-title">{{movieDetail.title}}</h2>
			     <div class="md-subhead">
			       <p>{{movieDetail.countries ? movieDetail.countries[0] : ''}}<span v-for="genre in movieDetail.genres">{{genre}}</span></p>
			       <p>年份：{{movieDetail.year}}</p>
			       <div class="cardContent">{{movieDetail.summary}}</div>
			     </div>
		</div>
		<div class="cardContent1">
			<h3 class="md-subheading">导演：{{movieDetail.directors ? movieDetail.directors[0].name : ''}}</h3>
			<div class="card-reservation">
			    <img :src="movieDetail.directors ? movieDetail.directors[0].avatars.medium : ''" alt="">
			</div>
		</div>	
	</div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'movie_detail',

  data(){
		return{
			movieId: this.$route.params.id,
			movieDetail: {},
			spinnerFlag: true
		}
	},
	computed: {
		theme(){
	      return this.$store.getters.THEME_COLOR
	    }
	},
	mounted: function(){
		this.reqMovieDetail();
	},
	methods: {
		reqMovieDetail(){
			axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.movieId)
		        .then(function(res) {
		        	console.log(res);
		          this.movieDetail = res.data.id ? res.data : JSON.parse(res.request.response);
		          this.spinnerFlag = false;
		        }.bind(this))
		        .catch(function(error){
		          console.log(error);
		        });
		},
		handleBack(){
  		this.$router.push({name:'movie'})
  	}
	}
}
</script>

<style lang="scss" scoped>
#movieDetail{
	.top{
		background: #009688;
		color: rgba(255,255,255,0.87);
		position: fixed;
		z-index: 3;
		width: 100%;
		display: flex;
		align-items: center;
		align-content: center;
		text-align: center;
		padding: 0.19rem 0;
		i{
			margin-left: 0.2rem;
		}
		h2{
		font-size: 0.2rem;
		flex: 1 1 0%;
		}
	}
	.cardHeader{
		padding-top: 0.74rem;
		.md-title{
			font-size: 0.24rem;
		}
		p{
			margin-top: 0.03rem;
			font-size: 0.14rem;
			line-height: 0.2rem;
		}
		.cardContent{
			font-size: 0.14rem;
			line-height: 0.22rem;
			padding: 0.3rem;
			text-align: left;
		}
	}
	.cardContent1{
		.md-subheading{
			font-size: 0.16rem;
			line-height: 0.24rem;
		}
		.card-reservation{
			width: 0.4rem;
			height: 0.4rem;
			margin:0 auto;
			img{
				width: 100%;
				height: 100%;
				border-radius: 50%;
				display: block;
			}
		}
	}
}
</style>