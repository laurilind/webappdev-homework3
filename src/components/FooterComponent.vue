<template>
    <div class="Footer">
        <p>Olaf, Andreas, Lauri Fall 2022</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
    
    .Footer {
        background-color: #a2c5b8;;
    }
  </style>