<template>
	<div id="home">
    <headerBack v-model="isShow"></headerBack>
    <navbar></navbar>
    <sidebar v-model="isShow"></sidebar>
         <router-view></router-view>
     
	</div>
</template>
	
<script>
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