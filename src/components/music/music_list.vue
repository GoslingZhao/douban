<template>
	<div id="musicList">
		<div class="top">
			<i class="iconfont icon-back" @click="handleBack"></i>
			<h2>飙升榜</h2>
		</div>
		<Search></Search>
		<div class="list">
			<ul>
				<li v-for="data in datalist">
					<img />
					<span>{{data}}</span>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
import Search from "./search_music.vue"
export default {

  name: 'music_list',
  components:{
  	Search
  },

  data () {
    return {
    	datalist:["1123123123","2123123","3"]
    };
  },
  methods:{
  	handleBack(){
  		this.$router.push({name:'music'})
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
		font-size: 0.14rem;
		text-align: left;

		li{
			height: 0.36rem;
			margin: 0.1rem;
		}
	}
}
</style>