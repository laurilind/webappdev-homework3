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

        if (password.length < 8 || password.length > 14) {
            window.alert("Password is not the correct length!")
        }
        else if (upperCaseLetters < 1) {
            window.alert("Password has to contain at least one uppercase character!")
        }
        else if (lowerCaseLetters < 3) {
            window.alert("Password has to contain more than two lowercase characters!")
        }
        else if (numbers < 1) {
            window.alert("Password has to contain at least one numberic value!")
        }
        else if (!firstIsUppercase) {
            window.alert("First character of the password should be an uppercase character!")
        }
        else if (!includes) {
            window.alert("Password should include the character '_'!")
        }
        else {
            this.$refs.email.value="";
            this.$refs.password.value="";
        }
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