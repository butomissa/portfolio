import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import arrow from '@/assets/iconfont/iconfont.css'
import iconfont from '@/assets/iconfont/iconfont.js'

Vue.config.productionTip = false
Vue.use(iconfont, arrow)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
