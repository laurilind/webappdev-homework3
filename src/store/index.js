import { createStore } from 'vuex'
import importedJSON from "../assets/posts.json"

export default createStore( {
  state: {
    json: importedJSON,
  },
  getters: {
    getPosts: state => {
      return state.json;
    }
    
  },
  mutations: {
    addLike(state, payload)  {
      console.log("in mutation " + payload.postID);
      // const JSONobj = JSON.parse(state.json);
      for (let i = 0; i < state.json.length; i++) {
        if (state.json[i].postID == payload.postID) {
          state.json[i].postLikes += 1;
          console.log(state.json[i].postLikes);
          break;
        }
      }
      
    },
    resetLikes: state => {
      console.log("in mutation ");
      state.json.forEach(post => {
          post.postLikes = 0;
      })
    }
  },
  actions: {
    addLikeAct({commit}, payload){
      console.log('in action')
      commit("addLike", {postID: payload.postID});
    },

    resetLikesAct({commit}){
      console.log('in resetlikes action');
      commit("resetLikes");
    }
  },
  modules: {
  }
})
