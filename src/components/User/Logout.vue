<template>
  <div>
    <h1>Logout</h1>
    <div>
      <button id="submitBtn" class="button is-danger" @click="logoutUser">Log Out</button>
    </div>
    <p v-if="displayIsLogoutSuccessfully" id="validMessage" class="help is-success">Logged Out!</p>
    <p v-if="displayIsLogoutInvalid" id="invalidMessage" class="help is-danger">Couldn't log-out: error!</p>
  </div>
</template>

<style>
</style>


<script>

  const Cookies = require('js-cookie');

  export default {
    data() {
      return {
        displayIsLogoutSuccessfully: false,
        displayIsLogoutInvalid: false
      };
    },
    methods: {
      logoutUser() {
        const token = Cookies.get('access_token');
        if (typeof (token) !== 'undefined') {
          fetch('https://ubeat.herokuapp.com/logout',
            {
              method: 'get',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: token
              }
            })
            .then(this.setSuccessullyLogedOutMessage)
            .catch(this.handleLogoutError);
        } else {
          this.setInvalidLogedOutMessage();
        }
      },
      setSuccessullyLogedOutMessage() {
        this.unsetLoginCookie();
        this.displayIsLogoutInvalid = false;
        this.displayIsLogoutSuccessfully = true;
        this.$router.push('/login');
      },
      setInvalidLogedOutMessage() {
        this.displayIsLogoutSuccessfully = false;
        this.displayIsLogoutInvalid = true;
      },
      unsetLoginCookie(response) {
        Cookies.remove('access_token');
        return response;
      },
    },
    handleLogoutError() {
      this.setInvalidLogedOutMessage();
    }
  };
</script>
