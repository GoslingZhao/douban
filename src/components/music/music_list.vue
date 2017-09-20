<template>
	<div id="musicList">
		<div class="top">
			<i class="iconfont icon-back" @click="handleBack"></i>
			<h2>music</h2>
		</div>
		<Search></Search>
		<div class="list">
			<ul>
				<li v-for="(music,index) of musicList">
					<img :src="music.album.picUrl"/>
					 <p>{{music.album.name | getShortName}}/<span id="duration">{{music.duration | formatTime}}</span></p>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
import Search from "./search_music.vue"
import Store from "../../assets/js/storage.js"
import axios from "axios"
export default {

  name: 'music_list',
  components:{
  	Search
  },

  data () {
    return {
    	id: this.$route.params.listId,
		musicList:[],
    	spinnerFlag: true,
    };
  },
  mounted:function(){
  	this.getList();
  },
  	filters:{
  	getShortName(val){
  		if(String(val.length) > 10)
  			return val.slice(0, 10)+"...";
  		return val;
  	},
  	formatTime(val){
  		if(typeof val === 'undefined'){
  			return '未知长度';
  		}
  		var m = Math.floor(val/1000/60).toString();
  		var s = Math.round(val/1000%60).toString();
  		m = (m.length == 1) ? 0+m : m;
  		s = (s.length == 1) ? 0+s : s;
  		return m+":"+s;
  		}
  	},
  
  methods: {
  	handleBack(){
  		this.$router.push({name:'music'})
  	},
    getList(){
  		axios.get(API_PROXY+'http://music.163.com/api/playlist/detail?id='+this.id)
  		  .then(function (res) {
  		  	console.log(res)
  		  	res.data.result.tracks.forEach(music=>{
  		  		this.musicList.push(music);
  		  	})
  		  		this.spinnerFlag = false;
  		  	}.bind(this)).catch(function(error){
  		  		console.log(error)
  		  	})
    },
    formatTime(val){
    	if(typeof val === 'undefined'){
  			return '未知长度';
  		}
  		var m = Math.floor(val/1000/60).toString();
  		var s = Math.round(val/1000%60).toString();
  		m = (m.length == 1) ? 0+m : m;
  		s = (s.length == 1) ? 0+s : s;
  		return m+":"+s;
    }
    
  }
};
</script>

<style lang="scss" scoped>
#musicList{
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
	.list{
		font-size: 0.16rem;
		text-align: left;

		li{
			height: 0.4rem;
			margin: 0.1rem;
			line-height: 0.4rem;

			img{
				width: 0.4rem;
				height: 0.4rem;
				float:left;
				margin-right: 0.2rem;
			}
			p{
				float: left;
			}
		}
	}
}
</style>