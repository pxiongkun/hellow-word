import Vue from 'vue'
import App from './App'
import store from './store'
import req from './api/main.js'
import uniNavBar from './components/uni-nav-bar/uni-nav-bar.vue'
import utils from '@/static/js/toast.js'

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);
// import vconsole from 'vconsole';
Vue.config.productionTip = false
//将state挂载到原型上
Vue.prototype.$store=store;
Vue.prototype.$req = req
Vue.prototype.utils = utils
// Vue.use(utils)
Vue.component("uniNavBar",uniNavBar)
 // Vue.prototype.$vconsole = new vconsole()
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
