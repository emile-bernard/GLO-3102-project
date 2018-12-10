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
        <h1 class="title">Account &nbsp;
          <i v-if="!currentUser && !followed" class="button is-primary fas fa-user-plus"
             v-on:click="follow"></i>
          <i v-if="!currentUser && followed" class="button is-primary fas fa-user-minus"
             v-on:click="unfollow"></i>
        </h1>
        <p v-if="errorOccured" id="invalidMessage" class="help is-danger">Invalid</p>
        <user-information
          v-bind:userName.sync="userName"
          v-bind:email.sync="email"
          v-bind:currentUser="currentUser">
        </user-information>
      </div>
      <div class="column is-one-third">
        <h1 class="title not-wrappable">Playlists</h1>
        <p v-if="playlistsLoaded && !playlists.length" class="label not-wrappable">It's time to listen music!</p>
        <pulse-loader v-if="!playlistsLoaded"></pulse-loader>
        <div class="row is-one-third">
          <router-link class="button is-primary playlist-button"
                       :to="getPlayListURL(playlist.id)"
                       v-for="(playlist, index) in playlists"
                       v-bind:key="index">
            {{playlist.name}}
          </router-link>
        </div>
      </div>
      <div class="column is-one-third">
        <h1 class="title not-wrappable">Friends</h1>
        <p v-if="friendsLoaded && !friends.length" class="label not-wrappable">Go outside make some friends!</p>
        <pulse-loader v-if="!friendsLoaded"></pulse-loader>
        <div class="row is-one-third">
          <router-link class="button is-primary playlist-button"
                       :to="getFriendURL(friend.id, friend.name, friend.email)"
                       v-for="(friend, index) in friends"
                       v-bind:key="index">
            {{friend.name}}
          </router-link>
        </div>
      </div>
    </div>
    <hr v-if="currentUser">
    <div v-if="currentUser" id="account-info-logout-button" class="container">
      <router-link class="button has-text-primary is-size-3 is-white" to="/logout">
        Log Out &nbsp;
        <i id="logOutIcon" class="fas fa-sign-out-alt is-primary"></i>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
  .not-wrappable {
    text-wrap: none;
    white-space: nowrap;
  }

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
    getFriendsLocalStorageKey,
    getOneUsers,
    FollowAFriendAndGetFriendsListBack,
    StopFollowAFriendAndGetFriendsListBack
  } from '@/Api';
  import UserInformation from '@/components/User/UserInformations';
  import { redirectToLoginIfNotLoggedIn } from '../../LoginCookies';
  import PulseLoader from '../../../node_modules/vue-spinner/src/ScaleLoader';

  export default {
    components: {
      'pulse-loader': PulseLoader,
      'user-information': UserInformation
    },
    data() {
      return {
        id: String / Number,
        followed: this.isAlreadyFollowed(),
        errorOccured: false,
        userName: 'Loading...',
        email: 'Loading...',
        playlists: [],
        friends: [],
        currentUser: true,
        playlistsLoaded: false,
        friendsLoaded: false,
        inProcess: false,
      };
    },
    watch: {
      $route() {
        this.init();
      }
    },
    created() {
      this.$root.$on('playlist-loaded', () => {
        this.playlists = JSON.parse(localStorage.getItem(getPlaylistLocalStorageKey()));
      });
      this.$root.$on('friends-loaded', () => {
        this.friends = JSON.parse(localStorage.getItem(getFriendsLocalStorageKey()));
      });
      this.init();
    },
    methods: {
      async create() {
        if (typeof (this.$route.query.email) === 'undefined') {
          this.populateCurrentUser();
        } else {
          const userInfo = await getTokenInfo(false);
          if (this.$route.query.id !== userInfo.id) {
            this.populateAnotherUser();
          } else {
            this.populateCurrentUser();
          }
        }
        this.followed = this.isAlreadyFollowed();
      },
      async populateCurrentUser() {
        const userInfo = await getTokenInfo(false);
        if (typeof (userInfo.errorCode) === 'undefined') {
          this.currentUser = true;
          this.userName = userInfo.name;
          this.email = userInfo.email;
          this.id = userInfo.id;
          this.errorOccured = false;
          this.playlistsLoaded = true;
          this.friendsLoaded = true;
          this.playlists = JSON.parse(localStorage.getItem(getPlaylistLocalStorageKey()));
          this.friends = JSON.parse(localStorage.getItem(getFriendsLocalStorageKey()));
        } else {
          this.errorOccured = true;
          setTimeout(() => {
            document.getElementById('invalidMessage').innerHTML = `${'<i id=\'invalidMessageIcon\' class=\'fas fa-exclamation-circle\'></i>'}${userInfo.message}`;
          }, 10);
        }
      },
      populateAnotherUser() {
        this.currentUser = false;
        this.userName = decodeURIComponent(this.$route.query.name);
        this.email = decodeURIComponent(this.$route.query.email);
        this.id = decodeURIComponent(this.$route.query.id);
        this.retrievePlaylists();
        this.retrieveFriends();
      },
      async populatePlaylists(playlist) {
        if (typeof (playlist.owner) !== 'undefined') {
          if (playlist.owner.id === this.id) {
            const playList = await getPlayListCollection(playlist.id, false);
            this.playlists.push({
              id: playList.id,
              name: playList.name,
            });
            this.playlistsLoaded = true;
          }
        }
      },
      filterPlaylists(allPlaylists) {
        for (let i = 0; i < allPlaylists.length; i += 1) {
          this.populatePlaylists(allPlaylists[i]);
        }
        if (allPlaylists.length) {
          this.playlistsLoaded = true;
        }
      },
      async retrievePlaylists() {
        this.playlists = [];
        this.playlistsLoaded = false;
        const commonPlayList = await getCommonPlayList(true);
        this.filterPlaylists(commonPlayList);
      },
      async retrieveFriends() {
        this.friends = [];
        this.friendsLoaded = false;
        const userInfos = await getOneUsers(this.id);
        this.friends = userInfos.following;
        this.friendsLoaded = true;
      },
      init() {
        redirectToLoginIfNotLoggedIn(this.$router, encodeURIComponent(this.$route.path));
        this.errorOccured = false;
        this.create();
      },
      getPlayListURL(playlistId) {
        return `/playlists/${playlistId}`;
      },
      getFriendURL(friendId, friendName, friendEmail) {
        return `/account?id=${friendId}&name=${friendName}&email=${friendEmail}`;
      },
      follow() {
        if (!this.inProcess) {
          this.inProcess = true;
          FollowAFriendAndGetFriendsListBack(this.$route.query.id, false)
            .then((response) => {
              localStorage.setItem(getFriendsLocalStorageKey(), JSON.stringify(response.following));
              this.followed = true;
              this.inProcess = false;
            });
        }
      },
      unfollow() {
        if (!this.inProcess) {
          this.inProcess = true;
          StopFollowAFriendAndGetFriendsListBack(this.$route.query.id, false)
            .then((response) => {
              localStorage.setItem(getFriendsLocalStorageKey(), JSON.stringify(response.following));
              this.followed = false;
              this.inProcess = false;
            });
        }
      },
      isAlreadyFollowed() {
        const friends = JSON.parse(localStorage.getItem(getFriendsLocalStorageKey()));
        for (let i = 0; i < friends.length; i += 1) {
          const friend = friends[i];
          if (friend.id === this.$route.query.id) {
            return true;
          }
        }
        return false;
      }
    },
  };
</script>

