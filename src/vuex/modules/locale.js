import Main from '@/main.js'

const state = {
  langs: null
}

const getters = {}

const mutations = {
  updateLang (state, payload) {
    console.log('Main: ', Main)
    Main.$i18n.locale = payload
  }
}

const actions = {
  setLang ({commit}, payload) {
    console.log('setLang: ', payload)
    commit('updateLang', payload)
    // this.$cookie.set('lang',  this.lang);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
