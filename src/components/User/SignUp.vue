<template>
  <section class="section">
    <div class="hero is-fullheight">
      <div class="column is-6 is-offset-4">
        <h3 class="title has-text-white">SignUp</h3>
        <p class="subtitle has-text-white">Please create your UBeat account.</p>
        <div class="box">
          <form>
          <div class="field">
            <label class="label">Full name</label>
            <div class="control has-icons-left">
              <input id="fullNameInput" class="input" type="text" placeholder="Full name..."
                     @keyup.enter="createNewUser" autocomplete="username">
              <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input id="emailInput" class="input" type="email" placeholder="email..." @keyup.enter="createNewUser" autocomplete="email">
              <span class="icon is-small is-left">
                    <i class="fas fa-at"></i>
                </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input id="passwordInput" class="input" type="password" @keyup.enter="createNewUser" placeholder="password..." autocomplete="previous-password">
              <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                </span>
            </div>
          </div>
          </form>
          <br>
          <button id="submitBtn" class="button is-success" @click="createNewUser">Sign Up</button>
          <pulse-loader v-if="displaySignUpSpinner"></pulse-loader>
          <p v-if="displayIsSignUpSuccessfully" id="validMessage" class="help is-success">Success! You can now log
            in.</p>
          <p v-if="displayIsSignUpInvalid" id="invalidMessage" class="help is-danger"><i id="invalidMessageIcon"
                                                                                         class="fas fa-exclamation-circle"></i>Invalid
          </p>
          <hr>
          <p class="label">Already have an account?</p>
          <router-link class="button is-primary" :to="logInLoc">Login now!
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
  /* eslint-disable no-lonely-if */

  import * as api from '@/Api';
  import { getLoginToken, redirectBackToWhereItWasBeforeOrDefault } from '../../LoginCookies';
  import PulseLoader from '../../../node_modules/vue-spinner/src/ScaleLoader';

  export default {
    components: {
      'pulse-loader': PulseLoader,
    },
    data() {
      return {
        displayIsSignUpSuccessfully: false,
        displayIsSignUpInvalid: false,
        displaySignUpSpinner: false,
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
    methods: {
      async createNewUser() {
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

        this.displaySignUpSpinner = true;

        // Validate fields
        if (this.isNameValid(data.name)
          && this.isEmailValid(data.email)
          && this.isPasswordValid(data.password)) {
          const finaldata = signUpData.join('&');

          await api.singUpNewUser(finaldata, false)
            .then((response) => {
              if (typeof (response) === 'undefined') {
                this.setInvalidSignedUpMessage('Sing up failed, maybe your account already exist. Please try again.');
              } else {
                if (typeof (response.errorCode) === 'undefined') {
                  this.setIsSignedUp(response);
                } else {
                  this.setInvalidSignedUpMessage(response.message);
                }
              }
            });
        }
      },
      concatEquals(k, data) {
        return `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`;
      },
      setIsSignedUp(response) {
        if (typeof (response.errorCode) === 'undefined') {
          if ('id' in response) {
            this.setSuccessullySignedUpMessage();
          } else {
            this.setInvalidSignedUpMessage(response.message);
          }
        }
      },
      setSuccessullySignedUpMessage() {
        this.displaySignUpSpinner = true;
        this.displayIsSignUpInvalid = false;
        this.displayIsSignUpSuccessfully = true;
        setTimeout(this.redirectAfterSignUp(), 100);
      },
      setInvalidSignedUpMessage(message) {
        this.displaySignUpSpinner = false;
        this.displayIsSignUpSuccessfully = false;
        this.displayIsSignUpInvalid = true;
        setTimeout(() => {
          document.getElementById('invalidMessage').innerHTML = `${"<i id='invalidMessageIcon' class='fas fa-exclamation-circle'></i>"}${message}`;
        }, 10);
      },
      redirectAfterSignUp() {
        const fromRedir = this.$route.query.redir;
        const router = this.$router;
        const nested = true;
        redirectBackToWhereItWasBeforeOrDefault(router, fromRedir, '/login', nested);
      },
      isNameValid(name) {
        if (name === null || name === '') {
          this.setInvalidSignedUpMessage('Name cannot be empty');
          return false;
        }

        // const regExName = /^[a-zA-Z0-9]*$/;
        const regExName = /^[a-z ,.'-]+$/i;
        if (!regExName.test(name)) {
          this.setInvalidSignedUpMessage('Name format is invalid');
          return false;
        }

        return true;
      },
      isEmailValid(email) {
        if (email === null || email === '') {
          this.setInvalidSignedUpMessage('Email cannot be empty');
          return false;
        }

        const regExEmail = /\S+@\S+\.\S+/;
        if (!regExEmail.test(email)) {
          this.setInvalidSignedUpMessage('Email format is invalid');
          return false;
        }

        return true;
      },
      isPasswordValid(password) {
        if (password === null || password === '') {
          this.setInvalidSignedUpMessage('Password cannot be empty');
          return false;
        }

        return true;
      }
    },
    created() {
      //  check cookie and notify if already logged in.
      const token = getLoginToken();
      if (typeof (token) !== 'undefined') {
        this.setSuccessullySignedUpMessage();
      }
    },
  };
</script>
