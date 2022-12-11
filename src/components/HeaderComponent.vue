<template>
    <div class="Header">
        
        <h1> WebDevHomework4</h1>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/login">Log In</router-link> |
            <router-link to="/contacts">Contacts</router-link> |
            <router-link to="/addpost">Add a Post</router-link> 
            
        </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
    
    .Header {
        background-color: #da9729;
        display: black;
        margin: 0px 0px 10px 0px;
    }

    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    }
    
    nav a.router-link-exact-active {
    color: #a35d45;
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