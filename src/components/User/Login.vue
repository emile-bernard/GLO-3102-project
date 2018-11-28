<template>
  <!-- Input section -->
  <section class="section">
    <h1 class="title">You must log in to access the content. We <3 DRM (not).</h1>
    <div class="container is-5">
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
      <button id="submitBtn" class="button is-success" @click="loginUser">Log In</button>
      <p v-if="displayIsLoginSuccessfully" id="validMessage" class="help is-success">Success!</p>
      <p v-if="displayIsLoginInvalid" id="invalidMessage" class="help is-danger">Invalid!</p>
      <hr>
      <router-link class="button is-primary" :to="signUpLoc">Don't have an account? Register now!</router-link>
    </div>
  </section>
</template>

<style>
  /*<!--
  TODO: Fix the disapearing responsive icons
  -->*/
</style>

<script>

  import { getLoginToken, redirectBackToWhereItWasBeforeOrDefault, setLoginToken } from '../../LoginCookies';

  export default {
    components: {},
    data() {
      return {
        displayIsLoginSuccessfully: false,
        displayIsLoginInvalid: false,
      };
    },
    computed: {
      signUpLoc() {
        let loc = '/signup';
        const fromRedir = this.$route.query.redir;
        if (typeof (fromRedir) !== 'undefined') {
          loc = `${loc}?redir=${decodeURIComponent(fromRedir)}`;
        }
        return loc;
      }
    },
    methods: {
      loginUser() {
        const data = {
          email: document.getElementById('emailInput')
            .value
            .toString(),
          password: document.getElementById('passwordInput')
            .value
            .toString(),
        };
        const loginData = Object.keys(data)
          .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`);

        fetch('https://ubeat.herokuapp.com/login',
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: loginData.join('&')
          })
          .then(response => response.json())
          .then(response => this.setLoginCookie(response))
          .then(response => this.setIsLogin(response))
          .catch(this.setInvalidLogedInMessage());
      },
      setIsLogin(response) {
        if ('id' in response) {
          this.setSuccessullyLogedInMessage();
        } else {
          this.setInvalidLogedInMessage();
        }
        return response;
      },
      setSuccessullyLogedInMessage() {
        this.displayIsLoginInvalid = false;
        this.displayIsLoginSuccessfully = true;
        setTimeout(this.redirectAfterLogin(), 100);
      },
      setInvalidLogedInMessage() {
        this.displayIsLoginSuccessfully = false;
        this.displayIsLoginInvalid = true;
      },
      redirectAfterLogin() {
        const fromRedir = this.$route.query.redir;
        const router = this.$router;
        const nested = false;
        redirectBackToWhereItWasBeforeOrDefault(router, fromRedir, '/logout', nested);
      },
      setLoginCookie(response) {
        setLoginToken(response.token);
        return response;
      },
    },
    created() {
      //  check cookie and notify if already logged in.
      const token = getLoginToken();
      if (typeof (token) !== 'undefined') {
        this.setSuccessullyLogedInMessage();
      }
    },
  };
</script>
