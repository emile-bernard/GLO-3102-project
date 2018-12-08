<template>
  <div class="columns is-vcentered">
    <div class="column is-fullheight is-2 is-sidebar-menu is-hidden-mobile">
      <aside class="menu">
        <ul class="menu-list">
          <li>
            <p class="menu-label">Transactions</p>
            <ul>
              <li><a>Buy music</a></li>
              <li><a>Current offers</a></li>
              <li><a>Transactions historic</a></li>
            </ul>
          </li>
        </ul>
        <ul class="menu-list">
          <li>
            <p class="menu-label">Manage Your Friends</p>
            <ul>
              <li><a>Members</a></li>
              <li><a>Add a member as friend</a></li>
              <li><a>Invite a friend</a></li>
              <li><a>Share playlist</a></li>
            </ul>
          </li>
          <p class="menu-label">
            Administration
          </p>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
          <li><a>MemberShip</a></li>
        </ul>
        <p class="menu-label">
          Transactions
        </p>
      </aside>
    </div>

    <div class="section">
      <div class="container">
        <p v-if="errorOccured" id="invalidMessage" class="help is-danger">Invalid</p>
        <h1 class="title is-size-2">Account</h1>
        <user-information
          v-bind:userName.sync="userName"
          v-bind:email.sync="email"></user-information>
        <hr>
        <div id="acount-info-logout-button" class="container">
          <router-link class="button is-primary" to="/logout">
            Logout
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #account-info {
    background: rgba(0, 0, 0, 0.1);
  }
</style>

<script>
  import * as api from '@/Api';
  import UserInformation from '@/components/User/UserInformations';
  import { redirectToLoginIfNotLoggedIn } from '../../LoginCookies';


  export default {
    components: {
      'user-information': UserInformation
    },
    data() {
      return {
        id: String / Number,
        errorOccured: false,
        userName: 'Loading...',
        email: 'Loading...'
      };
    },
    watch: {
      $route() {
        this.init();
      }
    },
    created() {
      this.init();
    },
    methods: {
      async create() {
        if (typeof (this.$route.query.email) === 'undefined') {
          const userInfo = await api.getTokenInfo(false);
          if (typeof (userInfo.errorCode) === 'undefined') {
            this.userName = userInfo.name;
            this.email = userInfo.email;
            this.id = userInfo.id;
            this.errorOccured = false;
          } else {
            this.errorOccured = true;
            setTimeout(() => {
              document.getElementById('invalidMessage').innerHTML = `${'<i id=\'invalidMessageIcon\' class=\'fas fa-exclamation-circle\'></i>'}${userInfo.message}`;
            }, 10);
          }
        } else {
          this.userName = decodeURIComponent(this.$route.query.name);
          this.email = decodeURIComponent(this.$route.query.email);
          this.id = decodeURIComponent(this.$route.query.id);
        }
      },
      init() {
        redirectToLoginIfNotLoggedIn(this.$router, encodeURIComponent(this.$route.path));
        this.errorOccured = false;
        this.create();
      },
    },
  };
</script>

