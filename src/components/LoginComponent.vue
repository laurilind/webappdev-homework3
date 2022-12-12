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
      var data = {
        email: this.$refs.email.value,
        password: this.$refs.password.value,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      //this.$router.push("/");
      location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
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
