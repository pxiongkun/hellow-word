import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		testArr: [{
			id: 1,
			name: "纪念日"
		}],
		access_id:'',
		uerInfo: {},  //登陆信息
		hasLogin: false ,//是否登陆
		city: "四川省"
	},
	// 同步更改值
	mutations: {
		login(state, provider) {//改变登录状态  
			state.hasLogin = true  
			state.uerInfo.access_id = provider.access_id  
			state.uerInfo.userName = provider.user_name  
			uni.setStorage({//将用户信息保存在本地  
				key: 'uerInfo',  
				data: provider  
			})  
		},  
	},
	//异步
	actions: {
		getCity() {
			console.log()
		}
	}
})
