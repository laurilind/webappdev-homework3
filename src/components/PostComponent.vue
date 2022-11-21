<template>
        
    <div class="post-element" postID="">
            <span id="post-header">
                <img src="/logo.png" class="post-header-img" width="48" height="48">
                <p class="post-date" id="post-element-date">Oct 22, 2022</p>
            </span>
            <div class="post-image">
                <img :src="'/'+imgPath" class="post-image">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus ullam voluptates veniam, alias modi nulla nobis nisi quo reprehenderit cupiditate, 
                veritatis tenetur voluptate corporis corrupti ipsa, accusantium minus porro quae.
            </p>
            <div class="post-footer">
                <img src="/thumbsup.png" width="32" height="32" @click="onClick()" >
                <p class = "like_counter">{{postLikes}}</p>
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
      imgPath: String,
      postLikes: String
    },
    methods: {
        onClick(id) {
            console.log("clicked! id=" + this.$props.postID);
            this.$emit("likeClicked", this.$props.postID);
        },
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .post-element {
        background-color: #97a79f;
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
        color: #2b8e61;
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