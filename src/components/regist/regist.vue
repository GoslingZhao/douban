<template>
	<div id="regist">
		<form >
			<p>已有账号，直接<router-link to="/login">登录</router-link></p>
	      <div class="name">
	      	<img src="./img/regist_avatar.jpg">
		  </div>
		  <div class="login">
		  	<i class="iconfont icon-user"></i>
		  	<input type="text" />
		  </div>
		  <div class="login">
		  	<i class="iconfont icon-password"></i>
		  	<input type="password" />
		  </div>
		  <button class="raised warn" @click="goRegist">注册</button>
		</form>
	</div>
</template>

<script>
export default {

  name: 'regist',

  data () {
    return {

    };
  },
  methods:{
  	goRegist(){

  	}
  }
};
</script>

<style lang="scss" scoped>
#regist{
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	background: url('./img/regist_bg.jpg') no-repeat center center; 
	background-size: cover;

	form{
		width: 70%;
		p{
			font-size: 0.16rem;
			a{
				text-decoration: none;
				color: red;
			}
		}
	
	.name{
		width: 1.5rem;
		height: 1.5rem;
		margin: 0 auto;
		text-align: center;

		img{
			width: 100%;
			height: 100%;
			display: block;
			border-radius: 1.5rem;
		}
	}
	.login{
		width: 100%;
		line-height: 0.2rem;
		margin: 0.04rem 0 0.24rem;
		padding-top: 0.16rem;
		border-bottom: 1px solid white;
		i{
			color: white;
		}
		input{
			height: 0.32rem;
			border: none;
			background: none;
			width: 80%;
			outline: none;
			color: white;
		}
	}
	.raised{
		margin: 0 auto;
		width: 0.88rem;
		height: 0.36rem;
		margin: 0.06rem 0.08rem;
		padding: 0 0.16rem;
		font-size: 0.14rem;
	}
	.accent{
		background: #ff5722;
		color: rgba(255,255,255,0.87);
	}
	.warn{
		background: #f44336;
		color: rgba(255,255,255,0.87);
	}
	}
}
</style>