<template>
<div id="photo" class="j-container">
  <div class="j-content">
		<div 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="0"
        infinite-scroll-immediate-check="false"
    class="m-gallery">
      <transition-group name="fade" tag="div">
        <div v-for="(photo,index) in photoLists" :key="'photo'" class="item" @click="getPhotoDetail(index)">
            <img class="animated bounceIn" :src="photo.url">
        </div>
      </transition-group>
    </div>
  </div>
</div>
	
</template>
<script>

import axios from "axios"
import Vue from 'vue'
import { InfiniteScroll} from 'mint-ui';
import Store from "../../assets/js/storage.js"
Vue.use(InfiniteScroll);
export default {
  data(){
    return {
      photoLists: [],
      page:0
    }
  },
  mounted:function(){
    this.loadMore().then(function(){
      this.loadMore()
    }.bind(this));
  },
  methods: {
    getPhotoDetail(index){
      this.$router.push({ name: 'photo-detail', params: {id:this.photoLists[index]._id}});
      var photoData = {'index':index, 'photoLists': this.photoLists};
      Store.set('photoData', photoData);
    },
    loadMore:function() {
      this.page++;
        return axios.get(`https://gank.io/api/data/福利/10/${this.page}`).then(res=>{
          this.photoLists = [...this.photoLists,...res.data.results]
        }) 
        
      }
    }
    
}
</script>
<style scoped lang="scss">
	#photo{
		
		box-sizing: border-box;
		padding: 0.5rem 0 0.8rem;
		text-align: center;
	}
  .m-gallery>div{
      display: flex; //采用flex布局
      flex-wrap: wrap;  //规定一行放不下flex元素时自动换行
  }
  .m-gallery .item{
      height: 1rem;
      flex-grow:1;   //每个flex元素占的宽度相同
      margin: 0.02rem;
  }
  .m-gallery  img{
      height: 1rem;
      min-width: 100%;     
      max-width: 100%;
/*       background-color: red;
 */      object-fit: cover;      //使图片等比拉伸，可能会被裁减
      vertical-align: bottom;
  }
</style>



