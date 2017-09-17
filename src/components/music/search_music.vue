<template>
		<div id="search">
			<p><i class="iconfont icon-search"></i>
			<input type="text" placeholder="搜索"/></p>
			
		</div>
</template>

<script>
export default {

  name: 'search_music',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
#search{
	height: 0.38rem;
	border-bottom: 1px solid #009688;
	padding-top: 0.64rem;
	position: relative;
	p{
		width: 100%;
		position: absolute;
		top: -0.03rem;
		left: 0;
	}
	input{
		width: 80%;
		height: 0.32rem;
		border: none;
		outline: none;
	}
}
</style>