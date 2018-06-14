import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    isLogin: false
  },
  mutations: {
    LOGIN (state) {
      state.isLogin = true
    },
    LOGOUT (state) {
      state.isLogin = false
    }
  },
  actions: {
    login (context) {
      context.commit('LOGIN')
    },
    logout (context) {
      context.commit('LOGOUT')
    }
  }

})

export default store
