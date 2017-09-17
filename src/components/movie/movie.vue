<template>
	<div id="movie">
		<ul>
			<li @click="handleHot"><button>正在热映</button></li>
			<li @click="handleComing"><button>即将上映</button></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {

  name: 'movie',

  data () {
    return {

    };
  },
  methods:{
  	handleComing(){
  		this.$router.push({name:'movie_list_coming'})
  	},
  	handleHot(){
  		this.$router.push({name:'movie_list_hot'})
  	}
  }
};
</script>

<style lang="scss" scoped>
#movie{
	ul{
		overflow: hidden;
		background: #2196f3;

		li{
			float: left;
			list-style: none;
			width: 50%;
			button{
				border: none;
				width: 100%;
				height: 0.6rem;
				background: none;
				outline: none;
				color: white;
			}
		}
	}

}
</style>