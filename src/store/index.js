import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'
import * as actions from './action'
import { state, mutations } from './mutations.js'


Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state,
  mutations,
  actions,
  modules: {
  },
  strict: true
})
