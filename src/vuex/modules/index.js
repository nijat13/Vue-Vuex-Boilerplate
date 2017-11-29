// import Vue from 'vue'
// import url from '../../config/url'

export default {
  state: {
    indexState: 'Default State'
  },
  getters: {
    getterState (state) {
      return state.indexState
    }
  },
  mutations: {
    /*
    [types.UPDATE_STATE] (state, payload) {
      state.loginState = payload ? 'login success!' : 'login failed...'
      state.needVerify = !payload
    }
    */
  },
  actions: {
    /*
    [types.LOGIN_ACTION] ({commit}, payload) {
      return Vue.http.post(url.mobileDeviceLogin3, payload)
    }
    */
  }
}
