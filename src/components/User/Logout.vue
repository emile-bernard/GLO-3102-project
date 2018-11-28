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

  import { getLoginToken, removeLoginToken } from '../../LoginCookies';

  export default {
    data() {
      return {
        displayIsLogoutSuccessfully: false,
        displayIsLogoutInvalid: false
      };
    },
    methods: {
      logoutUser() {
        const token = getLoginToken();
        if (typeof (token) !== 'undefined') {
          fetch('https://ubeat.herokuapp.com/logout',
            {
              method: 'get',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // TODO: use token like this in EVERY API call of the app if token is set!
                Authorization: token
              }
            })
            .then(this.setSuccessullyLogedOutMessage)
            .catch(this.setInvalidLogedOutMessage);
        } else {
          this.setInvalidLogedOutMessage();
        }
      },
      setSuccessullyLogedOutMessage() {
        removeLoginToken();
        this.displayIsLogoutInvalid = false;
        this.displayIsLogoutSuccessfully = true;
        this.$router.push('/login');
      },
      setInvalidLogedOutMessage() {
        this.displayIsLogoutSuccessfully = false;
        this.displayIsLogoutInvalid = true;
      },
    },
  };
</script>
