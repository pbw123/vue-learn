import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 导入路由，会自动寻找router目录下的index.js，所以index.js可缺省
import router from './router'
new Vue({
	el:'#app',
	router,
  render: h => h(App),
}).$mount('#app')
