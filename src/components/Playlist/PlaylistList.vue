<template>
  <section class="section">
    <h1 class="title">Playlists</h1>
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/playlists"><span>Playlists</span></router-link>
    </p>
    <br/>

    <button class="button is-success"
            v-bind:style="{ display: displayCreatePlaylistButton}"
            @click="toggleCreateNewPlaylist">
      Create new playlist&nbsp;
      <i class="fas fa-plus action"></i>
    </button>

    <button v-if="playlists.length" class="button is-danger" @click="deleteSelectedPlaylist">
      Delete{{selected}}playlist(s)&nbsp
      <i class="fas fa-trash action"></i>
    </button>

    <button class="button is-warning"
            v-bind:style="{ display: displayCancelSelectionButton}"
            @click="cancelSelection">
      Cancel Selection&nbsp;
      <i class="fas fa-plus action"></i>
    </button>

    <div id="new-playlist-block" class="panel-block" v-bind:style="{ display: displayNewPlaylistBlock}">
      <div class="field has-addons">
        <div class="control">
          <input id="new-playlist-input"
                 class="input is-primary"
                 type="text"
                 placeholder="Playlist name..."
                 value="Playlist"/>
        </div>
        <div class="control">
          <button class="button is-primary" @click="createNewPlaylist">Create</button>
        </div>
      </div>
    </div>

    <br/>
    <pulse-loader v-if="!isLoaded"></pulse-loader>
    <playlist-overview v-else v-for="playlist in playlists"
                       v-bind:key="playlist.id"
                       v-bind:id="playlist.id"
                       v-bind:name="playlist.name"
                       v-bind:displayPlaylistSelection="displayPlaylistSelection"
                       @playlist-selected="selectedPlaylists.push(playlist.id)"
                       @playlist-unselected="selectedPlaylists.splice(selectedPlaylists.indexOf(playlist.id), 1)"
                       v-bind:cancelSelection="cancelSelectionData">
    </playlist-overview>
  </section>
</template>

<style scoped>
  #new-playlist-block {
    background-color: white;
  }

  .fas.action {
    color: white;
  }
</style>

<script>
  import PlaylistOverview from './PlaylistOverview';
  import PulseLoader from '../../../node_modules/vue-spinner/src/ScaleLoader';
  import { redirectToLoginIfNotLoggedIn, getLoginToken } from '../../LoginCookies';
  import {
    getPlaylistLocalStorageKey,
    getTokenLocalStorageKey,
    getQueryParamCurrentToken,
    GetCORSAllowedHeader
  } from '../../Api';

  export default {
    data() {
      return {
        isLoaded: false,
        playlists: [],
        displayCancelSelectionButton: 'none',
        displayCreatePlaylistButton: 'inline',
        displayNewPlaylistBlock: 'none',
        displayPlaylistSelection: 'none',
        selected: ' ',
        selectedPlaylists: [],
        cancelSelectionData: false,
      };
    },
    components: {
      'pulse-loader': PulseLoader,
      'playlist-overview': PlaylistOverview,
    },
    methods: {
      toggleCreateNewPlaylist() {
        this.displayNewPlaylistBlock = this.displayNewPlaylistBlock === 'block' ? 'none' : 'block';
      },
      togglePlaylistSelection() {
        this.selected = this.selected === ' selected ' ? ' ' : ' selected ';
        this.displayPlaylistSelection = this.displayPlaylistSelection === 'block' ? 'none' : 'block';
        this.displayCreatePlaylistButton = this.displayCreatePlaylistButton === 'inline' ? 'none' : 'inline';
        this.displayCancelSelectionButton = this.displayCancelSelectionButton === 'inline' ? 'none' : 'inline';
      },
      cancelSelection() {
        this.togglePlaylistSelection();
        this.cancelSelectionData = !this.cancelSelectionData;
      },
      createNewPlaylist() {
        this.toggleCreateNewPlaylist();
        fetch(`https://ubeat.herokuapp.com/playlists${getQueryParamCurrentToken()}`,
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              Authorization: localStorage.getItem(getTokenLocalStorageKey())
            },
            body: JSON.stringify(
              {
                name: document.getElementById('new-playlist-input')
                  .value
                  .toString(),
              })
          })
          .then(response => response.json())
          .then((response) => {
            this.playlists.push({
              id: response.id,
              name: response.name,
              tracks: []
            });
            localStorage.setItem(getPlaylistLocalStorageKey(), JSON.stringify(this.playlists));
          });
      },
      deleteSelectedPlaylist() {
        for (let i = 0; i < this.selectedPlaylists.length; i += 1) {
          const playlistId = this.selectedPlaylists[i];

          const token = getLoginToken();
          if (typeof (token) !== 'undefined') {
            fetch(`https://ubeat.herokuapp.com/playlists/${playlistId}${getQueryParamCurrentToken()}`,
              {
                method: 'delete',
                headers: GetCORSAllowedHeader()
              })
              .then(response => response.json());

            this.removePlaylistById(playlistId);
          }
        }
        this.togglePlaylistSelection();
        this.selectedPlaylists = [];
      },
      removePlaylistById(playlistId) {
        for (let i = 0; i < this.playlists.length; i += 1) {
          const playlist = this.playlists[i];
          if (playlist.id === playlistId) {
            this.playlists.splice(i, 1);
            localStorage.setItem(getPlaylistLocalStorageKey(), JSON.stringify(this.playlists));
            break;
          }
        }
      }
    },
    created() {
      redirectToLoginIfNotLoggedIn(this.$router, encodeURIComponent(this.$route.path));
      this.playlists = JSON.parse(localStorage.getItem(getPlaylistLocalStorageKey()));
      if (typeof (this.playlists) !== 'undefined') {
        this.isLoaded = true;
      }
      this.$root.$on('playlist-loaded', () => {
        this.playlists = JSON.parse(localStorage.getItem(getPlaylistLocalStorageKey()));
        this.isLoaded = true;
      });
    },
  };
</script>
