<template>
  <div>
    <div class="home">
      <div class="body-div">
        <div class="sidebar"></div>
        <ul>
            <PostComponentVue class="post" @like-clicked="onClickLike" :postLikes="product.postLikes" :postID="product.postID" :date="product.postDate" :msg="product.postText" :imgPath="product.postImage" v-for = "product in json" :key="product.id">
            
            </PostComponentVue>
        </ul>
        <div class="sidebar"></div>
      </div>
      <p @click="resetLikes">Reset likes</p>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import PostComponentVue from '@/components/PostComponent.vue';
import store from '@/store';
export default {
  name: 'HomeView',
  
  components: {
    PostComponentVue
  },
  data: function() {
    const json = this.$store.getters.getPosts
    return {json};
  },
  methods: {
    onClickLike(id) {
        console.log("Event target id: " + id);
        this.$store.dispatch("addLikeAct", {postID: id});
    },
    resetLikes(){
        console.log("resetLikes");
        this.$store.dispatch("resetLikesAct", {});
    }
  }
}

</script>
<style>

body {
    margin: 0;
}

head {
    align-self: center;
}

.show {display:block;}


.sidebar{
  background-color: #a2c5b8;
}

ul {
      padding-left: 0px;
    }

/* for desktop */
@media (min-width:1025px) {
    .body-div {
        display: flex;
        justify-content: space-between;
        align-content: center;
        height: max-content;
    }

    .sidebar {
        border-radius: 10px;
        text-align: center;
        min-width: 15%;
        margin: 10px 10px 10px 10px;
    }


    .post-element .post-image {
        width: 100%;
        height: auto;
    }
    

}

/* for mobile */
@media only screen and (max-width: 768px) {
    .body-div {
        display: flex;
        justify-content: left;
        align-content: center;
        width: 100%;
        height: max-content;
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 0px 0px;
    }
    .sidebar {
        width: 0%;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
    }

    .post-list {
        margin: 0;
        padding: 0px 0px 0px 0px;
        width: 100%;
    }

    .post-element {
        min-height: 150px;
        max-width: 100%;
        text-align: left;
        border-radius: 10px;
        margin: 0 auto;
        padding: 0px 0px 0px 0px;
    }

    .post-element .post-image {
        width: 100%;
        padding: auto;
    }

    .post-element p {
        padding: 0px 5px 0px 5px;
    }
}

#post-header {
    display: flex;
    justify-content: space-between;
    margin: 10px 20px 20px 20px;
    font-size: 20px;
}

#post-header~p {
    font-size: 25px;
}

#post-header~post-content {
    font-size: 25px;
}

#post-header+img {
    display: flex;
}

p::first-letter {
    font-weight: 500;
    font-variant: small-caps;
}

footer {
    justify-content: center;
    text-align: center;
}
</style>