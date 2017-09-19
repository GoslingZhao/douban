<template>
	<div id="home">
	 <backToTop></backToTop>
    <headerBack v-model="isShow"></headerBack>
    <navbar></navbar>
    <sidebar v-model="isShow"></sidebar>
         <router-view></router-view>
     
	</div>
</template>
	
<script>
import backToTop from '../common/backToTop.vue'
import headerBack from '../common/header_back.vue'
import navbar from '../common/navbar.vue'
import sidebar from '../common/sidebar.vue'
export default {

  name: 'home',

 data(){
    return {
      isShow: false
    }
  },
  components:{
    backToTop,
    headerBack,
    navbar,
    sidebar
  },
  computed:{
    theme(){
      return this.$store.getters.THEME_COLOR
    }
  }
}
</script>

<style >
  
</style>