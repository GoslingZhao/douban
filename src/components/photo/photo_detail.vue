<template>
<div id="photo-detail">
	<div class="top">
			<i class="iconfont icon-back" @click="handleBack"></i>
			<h2>photo</h2>
		</div>
    <transition name="slideT">
      <div class="login-tip" v-show="tipFlag" v-text="tip"></div>
    </transition>
    <div v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
      <img :src="photoList[index]['url']">
    </div>
</div>
	
</template>
<script>
import Store from "../../assets/js/storage.js"
export default {
  data(){
    return{
      localData: Store.get('photoData'),
      tip:'',
      tipFlag: false
    }
  },
  computed:{
    theme(){
      // return this.$store.getters.THEME_COLOR
    },
    index(){
      return this.localData.index
    },
    photoList(){
      return this.localData.photoLists
    }
  },
  mounted:function(){
  },
  watch: {
    
  },
  methods: {
  	handleBack(){
  		this.$router.push({name:'photo'})
  	},
    onSwipeLeft(){
      if(this.localData.index === this.photoList.length-1){
        this.tip="这是最后一张图"
        this.tipFlag = true;
        setTimeout(function(){
          this.tipFlag = false;
        }.bind(this),2000)
        return;
      } 
      this.localData.index++;
    },
    onSwipeRight(){
      if(this.localData.index === 0){
        this.tip="这是第一张图"
        this.tipFlag = true;
        setTimeout(function(){
          this.tipFlag = false;
        }.bind(this),2000)
        return;
      } 
      this.localData.index--;
    }
  },
  components:{
    
  }
}
</script>
<style scoped lang="scss">
#photo-detail{
	img{
		width: 100%;
		padding-top: 1rem;
	}
}
.top{
		background: #009688;
		color: rgba(255,255,255,0.87);
		position: fixed;
		z-index: 3;
		width: 100%;
		display: flex;
		align-items: center;
		align-content: center;
		text-align: center;
		padding: 0.19rem 0;
		i{
			margin-left: 0.2rem;
		}
		h2{
		font-size: 0.2rem;
		flex: 1 1 0%;
		}
	}
</style>



