<template>
    <div class="Login">
        <div class="login-entry">
            <div class="top">
                <label for="email"><b>Email</b></label>
                <input type="text" ref="email">
            </div>
            <div class="bottom">
                <label for="password"><b>Password</b></label>
                <input type="password"  ref="password">
            </div>    
            <div class="login-div">
                <input type="button" value="Login" @click="clickedLogin">
            </div>   
            <div class="signup-div">
                <input type="button" value="Signup" @click="clickedSignup">
            </div>    
                
        </div>
    </div>
  </template>

<script>

export default {
    name: 'LoginComponent',
    methods: {
        // Authenticate
        clickedLogin(){

        },
        
        // Route to signup
        clickedSignup(){
            
        }
    }
}