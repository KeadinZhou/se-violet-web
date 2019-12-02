import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const USER_NULL={
  userid: null,
  username: '登录/注册',
  permission: -9
}

export default new Vuex.Store({
  state: {
    user: USER_NULL
  },
  mutations: {
    updateUser(state, data) {
      state.user = data
    },
    logoutUser(state) {
      state.user = USER_NULL
    }
  },
  actions: {
  },
  modules: {
  }
})
