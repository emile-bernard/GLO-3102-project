<template>
  <section class="section">
    <div class="hero is-fullheight">
      <div class="column is-6 is-offset-4">
        <h3 class="title has-text-white">Login</h3>
        <p class="subtitle has-text-white">Please login to access UBeat.</p>
        <div class="box">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input id="emailInput" class="input" type="email" placeholder="email..." @keyup.enter="loginUser">
              <span class="icon is-small is-left">
                    <i class="fas fa-at"></i>
                </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input id="passwordInput" class="input" type="password" @keyup.enter="loginUser">
              <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                </span>
            </div>
          </div>
          <button id="submitBtn" class="button is-success" @click="loginUser">Log In</button>
          <pulse-loader v-if="displayLoginSpinner"></pulse-loader>
          <p v-if="displayIsLoginSuccessfully" id="validMessage" class="help is-success">Success!</p>
          <p v-if="displayIsLoginInvalid" id="invalidMessage" class="help is-danger">Invalid</p>
          <hr>
          <label class="label">Don't have an account? </label>
          <router-link class="button is-primary" :to="signUpLoc">Register now!</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  #invalidMessage {
    font-size: 2em;
  }

  #invalidMessageIcon {
    color: red;
  }
</style>

<script>
  import { getLoginToken, redirectBackToWhereItWasBeforeOrDefault, setLoginToken } from '../../LoginCookies';
  import PulseLoader from '../../../node_modules/vue-spinner/src/ScaleLoader';


  export default {
    components: {
      'pulse-loader': PulseLoader,
    },
    data() {
      return {
        displayIsLoginSuccessfully: false,
        displayIsLoginInvalid: false,
        displayLoginSpinner: false,
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

        this.displayLoginSpinner = true;

        // Validate fields
        if (this.isEmailValid(data.email)
          && this.isPasswordValid(data.password)) {
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
            .catch(() => this.setInvalidLogedInMessage('Server error'));
        }
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
        this.displayLoginSpinner = true;
        this.displayIsLoginInvalid = false;
        this.displayIsLoginSuccessfully = true;
        setTimeout(this.redirectAfterLogin(), 100);
      },
      setInvalidLogedInMessage(message) {
        this.displayLoginSpinner = false;
        this.displayIsLoginSuccessfully = false;
        this.displayIsLoginInvalid = true;
        setTimeout(() => {
          document.getElementById('invalidMessage').innerHTML = `${"<i id='invalidMessageIcon' class='fas fa-exclamation-circle'></i>"}${message}`;
        }, 10);
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
      isEmailValid(email) {
        if (email === null || email === '') {
          this.setInvalidLogedInMessage('Email cannot be empty');
          return false;
        }

        const regExEmail = /\S+@\S+\.\S+/;
        if (!regExEmail.test(email)) {
          this.setInvalidLogedInMessage('Email format is invalid');
          return false;
        }

        return true;
      },
      isPasswordValid(password) {
        if (password === null || password === '') {
          this.setInvalidLogedInMessage('Password cannot be empty');
          return false;
        }
        return true;
      }
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
