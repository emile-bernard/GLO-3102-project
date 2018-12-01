<template>
  <section class="section">
    <div class="hero is-fullheight">
      <div class="column is-6 is-offset-4">
        <h3 class="title has-text-white">SignUp</h3>
        <p class="subtitle has-text-white">Please create your UBeat account.</p>
        <div class="box">
          <div class="field">
            <label class="label">Full name</label>
            <div class="control has-icons-left">
              <input id="fullNameInput" class="input" type="text" placeholder="Full name..." @keyup.enter="createNewUser">
              <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input id="emailInput" class="input" type="email" placeholder="email..." @keyup.enter="createNewUser">
              <span class="icon is-small is-left">
                    <i class="fas fa-at"></i>
                </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input id="passwordInput" class="input" type="password" @keyup.enter="createNewUser">
              <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                </span>
            </div>
          </div>
          <button id="submitBtn" class="button is-success" @click="createNewUser">Sign Up</button>
          <p v-if="displayIsLoginSuccessfully" id="validMessage" class="help is-success">Success! You can now log in.</p>
          <p v-if="displayIsLoginInvalid" id="invalidMessage" class="help is-danger">Invalid!</p>
          <hr>
          <router-link class="button is-primary" :to="logInLoc">Already have an account? Login now!
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  /*<!--
  TODO: Fix the disapearing responsive icons
  -->*/
</style>

<script>

  import { getLoginToken, redirectBackToWhereItWasBeforeOrDefault } from '../../LoginCookies';

  export default {
    data() {
      return {
        displayIsLoginSuccessfully: false,
        displayIsLoginInvalid: false,
      };
    },
    computed: {
      logInLoc() {
        let loc = '/login';
        const fromRedir = this.$route.query.redir;
        if (typeof (fromRedir) !== 'undefined') {
          loc = `${loc}?redir=${decodeURIComponent(fromRedir)}`;
        }
        return loc;
      }
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
        const nested = true;
        redirectBackToWhereItWasBeforeOrDefault(router, fromRedir, '/login', nested);
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
