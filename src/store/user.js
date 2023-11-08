/**
 * User store module
 * @module user
 */

// import UserController
import UserController from '@/controllers/UserController'

const userController = new UserController()

export default {
  state: {
    users: null,
    module: 'user',
  },
  getters: {
    /**
     * @name Getters
     * @type {object}
     * @getter {object[]} Admins=Users Returns a user array with Users whose access level is 1
     */
    admins(state) {
      return state.users.filter((item) => item.accessLevel === 1)
    },
    users(state) {
      return state.users
    },
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload
    },
  },
  actions: {
    async getAllUsers({ commit }) {
      try {
        const res = await userController.readAll()
        commit('SET_USERS', res)
      } catch (e) {
        console.error(e)
      }
    },
  },
}