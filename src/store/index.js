import { createStore } from 'vuex'
import importedJSON from "../assets/posts.json"

export default createStore( {
  state: {
    json: importedJSON
  },
  getters: {
    getPosts: state => {
      return state.json;
    }
  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
  }
})
