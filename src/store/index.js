import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const api = 'http://shysimon.cn:5000'
const headurl = 'http://kealine.top/SE/head/'
// const api = 'http://10.66.2.108:5000'

const USER_NULL={
  userid: null,
  email: null,
  nickname: '登录/注册',
  permission: -9
}

export default new Vuex.Store({
  state: {
    page: null,
    api: api,
    headurl: headurl,
    user: USER_NULL
  },
  mutations: {
    savePage (state, page) {
      state.page = page
    },
    updateUser(state) {
      const that = state.page
      that.$http.post(that.$store.state.api + '/v1/user/search')
          .then(data => {
            const Data = data.data
            console.log(Data)
            if(Data.code === 200){
              state.user = {
                userid: Data.user.userId,
                email:  Data.user.email,
                nickname: Data.user.userNickName,
                permission: Data.user.userType,
                img: state.headurl + Data.user.userId % 30
              }
            } else {
              const msg = Data.errMsg
              console.log(msg)
              if ((typeof msg) === 'string') {
                that.$message.error(msg)
              } else {
                for(const item in msg) {
                  that.$message.error(msg[item][0])
                }
              }
            }
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response)
              that.$message.error('系统错误')
            }
          })
    },
    logoutUser(state) {
      const that = state.page
      that.$http.post(that.$store.state.api + '/v1/auth/logout')
          .then(data => {
            const Data = data.data
            console.log(Data)
            if(Data.code === 200){
              state.user = USER_NULL
              console.log(state.user)
              console.log(USER_NULL)
              that.$message.success('登出成功!')
              that.$router.push('/')
            } else {
              const msg = Data.errMsg
              console.log(msg)
              if ((typeof msg) === 'string') {
                that.$message.error(msg)
              } else {
                for(const item in msg) {
                  that.$message.error(msg[item][0])
                }
              }
            }
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response)
              that.$message.error('系统错误')
            }
          })
    }
  },
  actions: {
  },
  modules: {
  }
})
