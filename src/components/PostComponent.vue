<template>
    <div class="Post">
        
        <div class="post-element">
                <span id="post-header">
                    <img src="../assets/logo.png" class="post-header-img" width="48" height="48">
                    <p class="post-date" id="post-element-date">Oct 22, 2022</p>
                </span>
                <div class="post-image">
                    <img src="../assets/tartu.jpg" class="post-image">
                </div>
                <p>Post 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus ullam voluptates veniam, alias modi nulla nobis nisi quo reprehenderit cupiditate, 
                    veritatis tenetur voluptate corporis corrupti ipsa, accusantium minus porro quae.
                </p>
                <div class="post-footer">
                    <img src="../assets/thumbsup.png" width="32" height="32">
                </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostComponent',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
    
    .Post {
        background-color: #d0b998;
    }
    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }
    
    nav a.router-link-exact-active {
    color: #2b8e61;
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
  </style>