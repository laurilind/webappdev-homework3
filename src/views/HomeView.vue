<template>
    <div class="AllPosts">
      <div id="post-list">
      <h1>All Posts</h1>
        <ul>
          <div class="post-element" v-for="post in posts" :key="post.id">
            <!-- / We are putting an anchor for each post, when we click on it, we will be directed to the specific post view (/apost/) /  -->
            <a class="singlepost" :href="'/api/apost/' + post.id">
              <span class="title"> <b>Title:</b> {{ post.title }} </span> <br />
              <span class="body"> <b>Body:</b> {{ post.body }} </span> <br />
              <span class="date"> <b>Date:</b> {{ post.date }} </span> <br />
            </a>
          </div>
        </ul>
      </div>
    </div>
  </template>
  

<script>
// @ is an alias to /src
import PostComponentVue from '@/components/PostComponent.vue';
import store from '@/store';
import { onMounted } from 'vue';
export default {
  name: 'HomeView',
  
  components: {
    PostComponentVue
  },
  data: function() {
    return {
        posts: [],
    };
  },
  methods: {
    fetchPosts(){
        console.log("Fetching posts");

        fetch(`http://localhost:3000/api/posts`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));

        console.log("reached all posts request");
    },

    // onClickLike(id) {
    //     console.log("Event target id: " + id);
    //     this.$store.dispatch("addLikeAct", {postID: id});
    // },
    // resetLikes(){
    //     console.log("resetLikes");
    //     this.$store.dispatch("resetLikesAct", {});
    // }
    
  },

  mounted(){
    this.fetchPosts();
  }

}
</script>


<style scoped>
h1 {
  font-size: 20px;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.post-element {
  background: rgb(227, 227, 227);
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 10px;
}
#post-list {
  background: #da9729;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 50%;
  border-radius: 20px;
}
#post-list ul {
  padding: 0;
}
#post-list li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 204, 0, 0.7);
}
</style>