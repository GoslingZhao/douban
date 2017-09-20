import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueMaterial  from 'vue-material'
import VueTouch from 'vue-touch'

/*mockData在接口尚未完成用于生成假数据，项目上线时不需引入*/
import mockData from './mock'



/*全局常量*/
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='                    // 线上代理地址
global.LOCAL_API_PROXY = 'http://192.168.1.128/proxy.php?apiProxy='    // 本地代理地址，注意更改为你的主机ip

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
