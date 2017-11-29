import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

// 引入不同页面自由的 module
/* inject:import start */
import Index from './modules/index'
/* inject:import end */

Vue.use(Vuex)

const state = {
  defaultState: 'defaultState'
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
  plugins,
  modules: {
    /* inject start */
    index: Index
    /* inject end */
  }
})
