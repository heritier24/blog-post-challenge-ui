import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorID: ''
  },
  getters: {
    getAuthorID (state) {
      return state.authorID
    }
  },
  mutations: {
    setAuthorID (state, authorID) {
      state.authorID = authorID
    }
  },
  actions: {
  },
  modules: {
  }
})
