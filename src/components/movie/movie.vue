<template>
	<div id="movie">
		<ul>
			<router-link to="movie_list_top250" activeClass="active" tag="li">Top250</router-link>
			<router-link to="movie_list_hot" activeClass="active" tag="li">正在热映</router-link>
			<router-link to="movie_list_coming" activeClass="active" tag="li">即将上映</router-link>
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
  }
};
</script>

<style lang="scss" scoped>
#movie{
	ul{
		overflow: hidden;
		width: 100%;
		background: #2196f3;
		position: fixed;
		left: 0;
		font-size: 0.16rem;
		top: 0.64rem;


		li{
			float: left;
			list-style: none;
			width: 33%;
			height: 0.48rem;
			line-height: 0.48rem;
		}
	}

}
.active{
		border-bottom: 0.05rem solid red;
		color:red
	}
</style>