

<template>
    <input type="button" class="logout-button" value="Log out" @click="clickedLogout">
    <div class="AllPosts">
      <div id="post-list">
      <h1>All Posts</h1>
        <ul>
          <div class="post-element" v-for="post in posts" :key="post.id">
            <!-- / We are putting an anchor for each post, when we click on it, we will be directed to the specific post view (/apost/) /  -->
            <router-link class="singlepost" :to="'/api/apost/' + post.id">
              <span class="title"> <b>Title:</b> {{ post.title }} </span> <br />
              <span class="body"> <b>Body:</b> {{ post.body }} </span> <br />
              <span class="url"> <b>URL:</b> {{ post.urllink }} </span> <br />
            </router-link>
          </div>
        </ul>
      </div>
    </div>

    <span class="bottom-frame">
        <input type="button" class="addpost-button" value="Add Post" @click="clickedAddPost">
        <input type="button" class="deleteposts-button" value="Delete All Posts" @click="clickedDeletePosts">
    </span>
</template>
  

<script>
// @ is an alias to /src
import PostComponentVue from '@/components/PostComponent.vue';
import APost from '../views/APost.vue';
import store from '@/store';
import auth from '../auth'
import { onMounted } from 'vue';
export default {
  name: 'HomeView',
  
  components: {
    APost
  },
  data: function() {
    return {
        posts: [],
        authResult: auth.authenticated()

    };
  },
  methods: {
    fetchPosts(){
        console.log("Fetching posts");

        fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));

        console.log("finished all posts request");
    },

    clickedAddPost(){
        this.$router.push({ name: 'addpost' })
    },

    clickedDeletePosts() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/api/posts`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.fetchPosts();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    clickedLogout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
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
.logout-button {
    padding-bottom: 5px;
    margin-bottom: 5px;
}
</style>