import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  tickets: []
}

const mutations = {
  setTickets (state, tickets) {
    state.tickets = tickets
  }
}

const actions = {
  async getTickets ({commit}) {
    console.log('Hii')
    await axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        commit('setTickets', res.data)
      })
  }
}

const getters = {
  tickets (state) {
    return state.tickets
  }
}

let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
