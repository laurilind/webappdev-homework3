<template>
        
    <div class="post-element" postID="">
            <span id="post-header">
                <img src="/logo.png" class="post-header-img" width="48" height="48">
                <p class="post-date" id="post-element-date">{{date}}</p>
            </span>
            <div class="post-image">
                <img :src="'/'+imgPath" class="post-image">
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus ullam voluptates veniam, alias modi nulla nobis nisi quo reprehenderit cupiditate, 
                veritatis tenetur voluptate corporis corrupti ipsa, accusantium minus porro quae.
            </p>
            <div class="post-footer">
                <img src="/thumbsup.png" width="32" height="32" @click="onClick()" >
                <p class = "like_counter">{{}}</p>
            </div>
    </div>
    
  </template>
  
  <script>
import { isIntegerKey } from '@vue/shared';

  export default {
    name: 'PostComponent',
    data() {
	  return {
    	likeCounter: 0
  	    }
	},
    props: {
      postID: String,
      msg: String,
      date: String,

    //   imgPath: String,
    //   postLikes: String
    },
    methods: {
        onClick(id) {
            console.log("clicked! id=" + this.$props.postID);
            this.$emit("likeClicked", this.$props.postID);
        },

        fetchAPost(id) {
            // fetch one post with the specied id (id)
            fetch(`http://localhost:3000/api/posts/${id}`)
                .then((response) => response.json())
                .then((data) => (this.post = data))
                .catch((err) => console.log(err.message));
        },
        updatePost() {
            // using Fetch - put method - updates a specific post based on the passed id and the specified body
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(this.post),
            })
            .then((response) => {
            console.log(response.data);
            //this.$router.push("/apost/" + this.post.id);
            // We are using the router instance of this element to navigate to a different URL location
            this.$router.push("/api/allposts");
            })
            .catch((e) => {
            console.log(e);
            });
        },
        deletePost() {
        // using Fetch - delete method - delets a specific post based on the passed id
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
            console.log(response.data);
            // We are using the router instance of this element to navigate to a different URL location
            this.$router.push("/api/allposts");
            })
            .catch((e) => {
            console.log(e);
            });
        },
    },

    mounted(){
        this.fetchAPost(this.$route.params.id);
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .post-element {
        background-color: #d98f17;
    }
    
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #e8cc17;
    }
    .post-footer{
        display: flex;
    }
    .like_counter{
        padding-left: 10px;
        margin-top: 7px;
    }
    .post-element {
        min-height: 150px;
        /* max-width:fit-content; */
        text-align: left;
        margin: -5px 20px 40px 20px;
        border-radius: 10px;
        text-align: left;
        padding: 5px 10px 10px 10px;
    }
  </style>