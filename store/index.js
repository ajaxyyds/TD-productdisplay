// vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 数据源
	state: {
		historyList: uni.getStorageSync("__history") || []
	},
	//修改加工state
	mutations: {
		SET_HISTORY_LIST(state, history) {
			state.historyList = history
		},
		CLEAR_HISTORY(state) {
			state.historyList = []
		}
	},
	// 界面调用action里面的方法
	//ajax请求
	actions: {
		set_history
		({
			commit,state
		}, history)
		{
			let list = state.historyList
			list.unshift(history)
			uni.setStorageSync('__history', list)
			commit('SET_HISTORY_LIST', list)
		},
		clearHistory({
			commit
		}) {
			uni.removeStorageSync('__history')
			commit('CLEAR_HISTORY')
		}

	}
})

export default store