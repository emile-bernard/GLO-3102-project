<template>
  <section class="section">
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/users"><span>Users</span></router-link>
      <span> > </span>
      <router-link to="/account"><span>MyAccount</span></router-link>
    </p>
    <br/>
    <div id="main-content" class="container">
      <div class="column is-one-third">
        <h1 class="title is-size-2">Account</h1>
        <p v-if="errorOccured" id="invalidMessage" class="help is-danger">Invalid</p>
        <user-information
          v-bind:userName.sync="userName"
          v-bind:email.sync="email">
        </user-information>
      </div>
      <div class="column is-one-third">
        <h1 class="title is-size-2">Playlists</h1>
        <div class="row is-one-third">
          <router-link class="button is-primary playlist-button"
                       :to="getPlayListURL(playlist.id)"
                       v-for="playlist in playlists">
            {{playlist.name}}
          </router-link>
        </div>
      </div>
      <div class="column is-one-third">
        <h1 class="title is-size-2">Friends</h1>
        <div class="row is-one-third">
          <router-link class="button is-primary playlist-button"
                       :to="getPlayListURL(friend.id)"
                       v-for="friend in playlists">
            {{friend.name}}
          </router-link>
        </div>
      </div>
    </div>
    <hr v-if="currentUser">
    <div v-if="currentUser" id="account-info-logout-button" class="container">
      <router-link class="button has-text-primary is-size-3 is-white" to="/logout">
        Log Out &nbsp;
        <i id="logOutIcon" class="fas fa-sign-out-alt is-white"></i>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
  #main-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
  }

  #account-info-logout-button {
    display: flex;
    justify-content: center;
  }

  .playlist-button {
    width: 100px;
    overflow: hidden;
    margin: 5px;
  }
</style>

<script>
  import {
    getPlaylistLocalStorageKey,
    getTokenInfo,
    getPlayListCollection,
    getCommonPlayList,
    getFriendsLocalStorageKey
  } from '@/Api';
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
        email: 'Loading...',
        playlists: [],
        friends: [],
        currentUser: false,
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
          const userInfo = await getTokenInfo(false);
          if (typeof (userInfo.errorCode) === 'undefined') {
            this.currentUser = true;
            this.userName = userInfo.name;
            this.email = userInfo.email;
            this.id = userInfo.id;
            this.errorOccured = false;
            this.playlists = JSON.parse(localStorage.getItem(getPlaylistLocalStorageKey()));
            this.friends = JSON.parse(localStorage.getItem(getFriendsLocalStorageKey()));
          } else {
            this.errorOccured = true;
            setTimeout(() => {
              document.getElementById('invalidMessage').innerHTML = `${'<i id=\'invalidMessageIcon\' class=\'fas fa-exclamation-circle\'></i>'}${userInfo.message}`;
            }, 10);
          }
        } else {
          this.currentUser = false;
          this.userName = decodeURIComponent(this.$route.query.name);
          this.email = decodeURIComponent(this.$route.query.email);
          this.id = decodeURIComponent(this.$route.query.id);
          this.playlists = [];
          this.friends = [];
        }
      },
      filterPlaylists(allPlaylists) {
        for (let i = 0; i < allPlaylists.length; i += 1) {
          this.populatePlaylists(allPlaylists[i]);
        }
      },
      async populatePlaylists(playlist) {
        if (playlist.owner.id === this.id) {
          const playList = await getPlayListCollection(playlist.id, false);
          this.playlists.push({
            id: playList.id,
            name: playList.name,
          });
        }
      },
      async getCommonPlayList() {
        const commonPlayList = await getCommonPlayList(true);
        this.filterPlaylists(commonPlayList);
      },
      init() {
        redirectToLoginIfNotLoggedIn(this.$router, encodeURIComponent(this.$route.path));
        this.errorOccured = false;
        this.create();
      },
      getPlayListURL(playlistId) {
        return `/playlists/${playlistId}`;
      }
    },
  };
</script>

