<template>
  <section class="section">
    <div class="hero is-fullheight">
      <div class="column is-6 is-offset-4">
        <h3 class="title has-text-white">Logout</h3>
        <p class="subtitle has-text-white">Are you sure ?</p>
        <div class="box">
          <div>
            <button id="submitBtn" class="button is-danger" @click="logoutUser">Log Out &nbsp;<i id="logOutIcon"
                                                                                                 class="fas fa-sign-out-alt is-white"></i>
            </button>
          </div>
          <p v-if="displayIsLogoutSuccessfully" id="validMessage" class="help is-success">Logged Out!</p>
          <p v-if="displayIsLogoutInvalid" id="invalidMessage" class="help is-danger">Couldn't log-out: error!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #logOutIcon {
    color: white;
  }
</style>

<script>
  import { getLoginToken, removeLoginToken } from '../../LoginCookies';
  import {
    getPlaylistLocalStorageKey,
    getUserIdLocalStorageKey,
    getTokenLocalStorageKey,
    getFriendsLocalStorageKey
  } from '../../Api';

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
            .then(this.setSuccessfullyLoggedOutMessage)
            .catch(this.setInvalidLoggedOutMessage);
        } else {
          this.setInvalidLoggedOutMessage();
        }
      },
      setSuccessfullyLoggedOutMessage() {
        removeLoginToken();
        localStorage.setItem(getFriendsLocalStorageKey(), undefined);
        localStorage.setItem(getTokenLocalStorageKey(), undefined);
        localStorage.setItem(getUserIdLocalStorageKey(), undefined);
        localStorage.setItem(getPlaylistLocalStorageKey(), undefined);
        this.displayIsLogoutInvalid = false;
        this.displayIsLogoutSuccessfully = true;
        this.$router.push('/');
        this.$root.$emit('userLoggedOut');
      },
      setInvalidLoggedOutMessage() {
        this.displayIsLogoutSuccessfully = false;
        this.displayIsLogoutInvalid = true;
      },
    },
  };
</script>
