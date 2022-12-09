<template>
  <div class="login-wrapper">
    <div class="login-children">
      <label for="email"><b>Email</b></label>
      <input type="text" ref="email" />
      <label for="password"><b>Password</b></label>
      <input type="password" ref="password" />
      <div class="login-buttons">
        <input type="button" value="Login" @click="clickedLogin" />
        <input type="button" value="Signup" @click="clickedSignup" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  methods: {
    // Authenticate
    clickedLogin() {
      //
    },

    // Route to signup
    clickedSignup() {
        this.$router.push({ name: 'signup' })
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
}
.login-children {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}
.login-signup-div {
  display: flex;
  margin: auto;
  justify-content: center;
}
.login-buttons {
    margin: 10px 0;
}
</style>
