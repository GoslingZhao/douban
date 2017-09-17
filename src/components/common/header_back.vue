<template>
  <div id="header-back">
  	<button><i class="iconfont icon-menu" @click="handleClick"></i></button>
  	<h2>豆瓣</h2>
  	<button><i class="iconfont icon-logout" @click="logout"></i></button>
  </div>
</template>

<script>
export default {
  
  name: 'header_back',

  data () {
    return {

    };
  },
  props:["value"],
  methods:{
  	handleClick(){
  		this.$emit("input",!this.value);
  	},
  	logout(){
  		this.$router.push({name:'login'})
  	}
  }
  
};
</script>

<style lang="scss" scoped>
#header-back{
	background: #2196f3;
	color: rgba(255,255,255,0.87);
	position: fixed;
	z-index: 3;
	width: 100%;
	display: flex;
	align-items: center;
	align-content: center;
	text-align: center;
	padding: 0.19rem 0;
	button{
		margin: 0 0.08rem;
		background: #2196f3;
		border: none;
		color: white;
		outline: none;
	}
	h2{
		font-size: 0.2rem;
		flex: 1 1 0%;
	}
}
</style>