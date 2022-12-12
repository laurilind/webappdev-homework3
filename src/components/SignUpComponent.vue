<template>
    <div class="Signup">
        <div class="post-element">
            <div class="top">
                <label for="email"><b>Email</b></label>
                <input type="text" ref="email">
            </div>
            <div class="bottom">
                <label for="password"><b>Password</b></label>
                <input type="password"  ref="password">
            </div>    
            <div class="signup-div">
                <input type="button" value="Signup" @click="clicked">
            </div>    
                
        </div>
    </div>
  </template>

<script>


export default {
  name: 'SignUpComponent',

  methods: {
    
    clicked() {

        var data = {
            email: this.$refs.email.value,
            password: this.$refs.password.value
        };

        let email = this.$refs.email.value;
        let password = this.$refs.password.value;
        var i = 0;
        var lowerCaseLetters = 0;
        var upperCaseLetters = 0;
        var numbers = 0;
        var firstIsUppercase = false;
        var includes = false;

        for (let j = 0; j < password.length; j++) {
            var character = password.charAt(j);
            if (!isNaN(character * 1)) {
                numbers += 1;
            }
            else {
                if (character == '_') {
                    includes = true;
                } 
                if (character == character.toUpperCase()) {
                    if (j == 0) {
                        firstIsUppercase = true;
                    }
                    upperCaseLetters += 1;
                }
                if (character == character.toLowerCase()){
                    lowerCaseLetters += 1;
                }
            }
        }

        if (password.length < 3 || password.length > 14) {
            window.alert("Password is not the correct length!");
            return;
        }
        else if (upperCaseLetters < 1) {
            window.alert("Password has to contain at least one uppercase character!")
            return;
        }


        console.log("Reached authentication")
        
        fetch("http://localhost:3000/auth/signup", {
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
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    }
  }
  
}
</script>

  <style scoped>
  .Signup {
        background-color: #d0b998;
        
    }

.post-element {
   padding: 30px;
}


.top {
    width: 5%;
    margin: auto;
}

.bottom {
    width: 5%;
    margin: auto;
    padding: 10px;
}

.signup-div {

    width: 5%;
    margin: auto;
}
.post-body {
    margin: auto;
    width: 50%;
}

h4 {
    padding: 0, 0, 0, 0;
}

input {
    padding: 0, 0, 0, 0;
}
</style>