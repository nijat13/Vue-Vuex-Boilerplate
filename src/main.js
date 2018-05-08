// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Router from 'vue-router'
import Resource from 'vue-resource'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import VueCookie from 'vue-cookie'

import filters from './filters'
import routerMap from './config/routers'
import i18n from './config/i18n'
import {initResource, interceptRouter} from './utils'
import App from './App'

Vue.config.productionTip = false

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(Resource)
initResource(Vue)

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueCookie)

const router = new Router({
  mode: 'history',
  routes: routerMap,
  history: false,
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  }
})

interceptRouter(router)

const Main = new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})

export default Main
