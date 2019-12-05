import '@/theme/theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.withCredentials = true
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    store.commit('savePage', this)
    store.commit('updateUser')
  }
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  document.querySelector('#page-top').scrollIntoView()
})