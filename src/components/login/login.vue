<template>
	<div id="login">
		<form >
	      <div class="name">
	      	<img src="./img/login_avatar.jpg">
		  </div>
		  <div class="login">
		  	<i class="iconfont icon-user"></i>
		  	<input type="text" v-model="username" require="inputFlag"/>
		  </div>
		  <div class="login">
		  	<i class="iconfont icon-password"></i>
		  	<input type="password" v-model="password" require="inputFlag"/>
		  </div>
		   <button class="raised accent" @click="login">登录</button>
		  <button class="raised warn" @click="goRegist">注册</button>
		</form>
	</div>
</template>

<script>
import AV from "../../assets/js/av"
import Util from "../../util/util"
import "../../assets/js/initLeanCloud"
export default {

  name: 'login',

  data () {
    return {
    	tipFlag: false,
		inputFlag: true,
		username: '',
		password: '',
		logging: false 
    };
  },
  methods:{
  	login(){
  		var username = this.username;
  		var pass = this.password;
  		if(!this.check({
  			username: username,
  			pass: pass
  		})) return;

  			this.logging = true;
  		AV.User.logIn(username,pass).then(function(loginedUser){
  			setTimeout(function(){
  				this.$router.push({name:'movie'})
  			}.bind(this),600)
  		}.bind(this),function(error){
  			alert('用户名和密码不匹配');
  			this.openDialog('check');
  			this.logging = false;
  		}.bind(this))
  	},
  	isEmpty(val){
  		return val ===''
  	},
  	check(obj){
  		if(this.isEmpty(obj.username)){
  			alert('用户名不能为空');
  			this.openDialog('check');
  			return false;
  		}
  		if(this.isEmpty(obj.pass)){
  			alert('密码不能为空');
  			this.openDialog('check');
  			return false;
  		}
  		return true;
  	},
  	doneLogin(res){
			this.alert.content = res.data.msg;
			this.alert.ok = '';
		    this.openDialog('check');
		},
		openDialog(ref) {
	      // this.$refs[ref].open();
	    },
	    closeDialog(ref) {
	      // this.$refs[ref].close();
	    },
	    onOpen() {
	      console.log('Opened');
	    },
	    onClose(type) {
	      console.log('Closed', type);
	    },
  	goRegist(){
  		this.$router.push({name:'regist'})
  	}
  }
};
</script>
<style lang="scss" scoped>
#login{
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	background: url('./img/login_bg.jpg') no-repeat center center; 
	background-size: cover;

	form{
		width: 70%;
	
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