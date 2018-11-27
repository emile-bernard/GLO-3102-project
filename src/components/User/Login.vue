<template>
  <!-- Input section -->
  <section class="section">
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
    </div>
  </section>
</template>

<style>
  /*<!--
  TODO: Fix the disapearing responsive icons
  -->*/
</style>

<script>
  export default {
    data() {
      return {
        displayIsLoginSuccessfully: false,
        displayIsLoginInvalid: false,
      };
    },
    components: {},
    methods: {
      setSuccessullyLogedInMessage() {
        this.displayIsLoginInvalid = false;
        this.displayIsLoginSuccessfully = true;
      },
      setInvalidLogedInMessage() {
        this.displayIsLoginSuccessfully = false;
        this.displayIsLoginInvalid = true;
      },
      setIsLoginSuccessfully(response) {
        if ('id' in response) {
          this.setSuccessullyLogedInMessage();
        } else {
          this.setInvalidLogedInMessage();
        }
        return response;
      },
      loginUser() {
        const data = {
          email: document.getElementById('emailInput')
            .value
            .toString(),
          password: document.getElementById('passwordInput')
            .value
            .toString(),
        };
        const loginData = Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`);

        fetch('https://ubeat.herokuapp.com/login',
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: loginData.join('&')
          })
          .then(response => response.json())
          .then(response =>
            this.setIsLoginSuccessfully(response)
          ).catch(this.setInvalidLogedInMessage());
      },
    },
    created() {
      //  TODO check cookie and notify if already logged in
    },
  };
</script>
