<template>
    <div class="login">
      <LoginComponentVue/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import LoginComponentVue from '@/components/LoginComponent.vue';
  export default {
    name: 'LoginView',
    components: {
      LoginComponentVue
    }
  }
  </script>
  