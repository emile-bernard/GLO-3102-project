<template>
  <!-- Input section -->
  <section class="section">
    <div class="container is-5">
      <div class="field">
        <label class="label">Full name</label>
        <div class="control has-icons-left">
          <input id="fullNameInput" class="input" type="text" placeholder="Full name...">
          <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
        </div>
        <!--<p id="invalidUserName" class="help is-danger" style="display: none">This field is invalid</p>-->
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left">
          <input id="emailInput" class="input" type="email" placeholder="email...">
          <span class="icon is-small is-left">
                    <i class="fas fa-at"></i>
                </span>
        </div>
        <!--<p id="invalidUserName" class="help is-danger" style="display: none">This field is invalid</p>-->
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left">
          <input id="passwordInput" class="input" type="password">
          <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                </span>
        </div>
        <!--<p id="invalidMessage" class="help is-danger" style="display: none">This field is invalid</p>-->
      </div>
      <button id="submitBtn" class="button is-success" @click="createNewUser">Sign Up</button>
      <p v-if="displayIsLoginSuccessfully" id="validMessage" class="help is-success">Success! You can now log in.</p>
      <p v-if="displayIsLoginInvalid" id="invalidMessage" class="help is-danger">Invalid!</p>
    </div>
  </section>
</template>

<style>
  /*<!--
  TODO: Fix the disapearing responsive icons
  -->*/
</style>

<script>

  const Cookies = require('js-cookie');

  export default {
    data() {
      return {
        displayIsLoginSuccessfully: false,
        displayIsLoginInvalid: false,
      };
    },
    components: {},
    methods: {
      createNewUser() {
        const data = {
          name: document.getElementById('fullNameInput')
            .value
            .toString(),
          email: document.getElementById('emailInput')
            .value
            .toString(),
          password: document.getElementById('passwordInput')
            .value
            .toString(),
        };
        const signUpData = Object.keys(data)
          .map(k => this.concatEquals(k, data));

        //  TODO Validate fields
        fetch('https://ubeat.herokuapp.com/signup',
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: signUpData.join('&')
          })
          .then(response => response.json())
          .then(this.setIsLogin)
          .catch(this.setInvalidLogedInMessage());
      },
      concatEquals(k, data) {
        return `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`;
      },
      setIsLogin(response) {
        if ('id' in response) {
          this.setSuccessullyLogedInMessage();
          this.$router.push('/login');
        } else {
          this.setInvalidLogedInMessage();
        }
        return response;
      },
      setSuccessullyLogedInMessage() {
        this.displayIsLoginInvalid = false;
        this.displayIsLoginSuccessfully = true;
      },
      setInvalidLogedInMessage() {
        this.displayIsLoginSuccessfully = false;
        this.displayIsLoginInvalid = true;
      },
    },
    created() {
      //  check cookie and notify if already logged in.
      const token = Cookies.get('access_token');
      if (typeof (token) !== 'undefined') {
        this.setSuccessullyLogedInMessage();
      }
    },
  };
</script>
