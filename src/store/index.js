import { createStore } from 'vuex'
import importedJSON from "../assets/posts.json"

export default createStore( {
  state: {
    json: importedJSON,
    likeCounter: 0
  },
  getters: {
    getPosts: state => {
      return state.json;
    }
    
  },
  mutations: {
    addLike(state)  {
      state.likeCounter++;
    },
    resetLikes(state) {
      state.likeCounter = 0;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
