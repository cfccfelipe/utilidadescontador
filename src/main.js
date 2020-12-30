import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from "bootstrap-vue"

import router from './router'
Vue.use(vueRouter)
Vue.use(BootstrapVue)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})