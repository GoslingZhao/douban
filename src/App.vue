<template>
  <div id="app">
         <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import home from './components/home/home.vue'
import Util from './util/util'
import Store from './assets/js/storage.js'
export default {
  name: 'app',

  data(){
    return {
      
    }
  },
  components:{
    home
  },

}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  #app {
  
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
