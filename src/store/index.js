import { createStore } from 'vuex'
import Auth from './auth.js'
import Reports from './reports.js'
import Suggests from './suggests.js'
import Users from './user.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth,
    Reports,
    Suggests,
    Users
  }
})
