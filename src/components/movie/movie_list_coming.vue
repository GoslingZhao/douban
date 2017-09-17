<template>
	<div id="movieComing">
		<ul>
			<li>
				<!-- <img :src=""/> -->
				<h3>123123</h3>
				<p>123123</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'movie_list_coming',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
li{
	overflow: hidden;
	padding: 0.1rem;
	color: black;
	font-size: 0.16rem;
	margin: 0 0.16rem;
	border-bottom: 1px solid #ccc;

	img{
		float: left;
		width: 1rem;
	}
}
</style>