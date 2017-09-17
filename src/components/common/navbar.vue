<template>
	<div id="navbar">
		<div class="movie" @click="doActive(0)">
			<i class="iconfont icon-tubiao-"></i>
			<p>电影</p>
		</div>
		<div class="music" @click="doActive(1)">
			<i class="iconfont icon-music"></i>
			<p>音乐</p>
		</div>
		<div class="book" @click="doActive(2)">
			<i class="iconfont icon-book"></i>
			<p>书籍</p>
		</div>
		<div class="photo" @click="doActive(3)">
			<i class="iconfont icon-photo"></i>
			<p>图片</p>
		</div>

	</div>
</div>
</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {
    	
    };
  },
  methods:{
  	doActive(index){
  		this.go(index);
  	},
  	go(index){
  		switch(index){
  		case 0:
  			this.$router.push({name:'movie'});
  			break;
  		case 1:
        	this.$router.push({name:'music'});
        	break;
        case 2:
        	this.$router.push({name:'book'});
        	break;
        case 3:
        	this.$router.push({name:'photo'});
        	break;
  		}
  	}
  }
};
</script>

<style lang="scss" scoped>
#navbar{
		width: 100%;
		display: flex;
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		z-index: 3;
		color: rgba(255,255,255,0.87);
		background-color: #2196f3;
		div{
			width: 25%;
			font-size: 0.14rem;
			cursor: pointer;
			flex-flow: column;
			align-items: center;
			justify-content: space-between;
			padding: 0.06rem 0.12rem 0.1rem;
		}
	}
	
</style>