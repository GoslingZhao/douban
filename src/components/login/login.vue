<template>
	<div id="login">
		<form >
	      <div class="name">
	      	<img src="./img/login_avatar.jpg">
		  </div>
		  <div class="login">
		  	<i class="iconfont icon-user"></i>
		  	<input type="text" v-model="name" require="inputFlag"/>
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
import axios from "axios"
export default {

  name: 'login',

  data () {
    return {
    	tipFlag: false,
		inputFlag: true,
		name: '',
		password: '',
		logging: false,
		unameHelp:'',
		upwdHelp:'',
		errorMessage:''
    };
  },
  methods:{
  	login(){
  		var username = this.name;
  		var pass = this.password;
  		console.log(this.name)
  		console.log(this.password)
  		if(!this.check({
  			name: username,
  			pass: pass
  		})) return;

  			this.logging = true;
  		axios.post("/api/login","name="+this.name+"&password="+this.password)
		.then(res=>{
			console.log(res.data)
			if(res.data){
				alert("登录成功");
				this.$router.push({name:'movie'});
			}else{                                                               alert("账号未注册或账号、密码错误")
			}
		})
  	},
  	isEmpty(val){
  		return val ===''
  	},
  	isValidUserName(val){
  		return /^[a-zA-Z0-9_]+$/.test(val);
  	},
  	isValidPassword(val){
  		return /^[A-Za-z0-9_-]{4,}$/.test(val); 
  	},
  	check(obj){
  		if(this.isEmpty(obj.username)){
  			alert('用户名不能为空');
  			// this.openDialog('check');
  			return false;
  		}
  		if(this.isEmpty(obj.pass)){
  			alert('密码不能为空');
  			// this.openDialog('check');
  			return false;
  		}
  		if(!this.isValidUserName(obj.username)){
				// this.alert.content = '用户名不能含有除字母或数字或下划线之外的任何字符';
				alert('用户名不能含有除字母或数字或下划线之外的任何字符')
				// this.openDialog('check');
				return false;
			}
			if(!this.isValidPassword(obj.pass)){
				// this.alert.content = '密码必须是至少4位的字母或数字结合';
				alert('密码必须是至少4位的字母或数字结合')
				// this.openDialog('check');
				return false;
			}
  		return true;
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