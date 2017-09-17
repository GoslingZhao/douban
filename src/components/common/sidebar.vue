<template>
	<transition name="myanimation">
	<div id="sidebar" v-show="value">
			<router-link to="/home/movie" tag="li" activeClass="active">首页</router-link>
			<router-link to="/login" tag="li" activeClass="active">登录</router-link>
			<router-link to="/regist" tag="li" activeClass="active">注册</router-link>
	</div>
	</transition>
</template>

<script>
export default {

  name: 'sidebar',
  props:["value"],

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
#sidebar{
	width: 50%;
	height: 100%;
	position: fixed;
	top: 0.64rem;
	left: 0;
	z-index: 10;
	background: pink;
	li{
		list-style: none;
    font-size: 0.18rem;
    margin: 0.2rem;
    border: 1px solid black;

	}
}
.myanimation-enter-active {
      animation: bounce-in .5s;
    }
    .myanimation-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0%{
        transform: translateX(-100px);
        opacity: 0;
      }
      100%{
        transform: translateX(0px);
        opacity: 1;
      }
    }
</style>