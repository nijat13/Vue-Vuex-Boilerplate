import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

// Modules
import Index from './modules/index'
import Locale from './modules/locale'

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
    index: Index,
    locale: Locale
    /* inject end */
  }
})
