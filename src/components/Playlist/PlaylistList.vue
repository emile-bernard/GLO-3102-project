<template>
  <section class="section">
    <h1 class="title">Playlists</h1>
    <p>
      <router-link to="/"><span>UBeat</span></router-link>
      <span> > </span>
      <router-link to="/settings"><span>Uncle Bob</span></router-link>
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

    <button class="button is-danger" @click="deleteSelectedPlaylist">
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
                 value="Uncle Bob Playlist"/>
        </div>
        <div class="control">
          <button class="button is-primary" @click="createNewPlaylist">Create</button>
        </div>
      </div>
    </div>

    <br/>
    <playlist-overview v-for="playlist in playlists"
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

<style>
  #new-playlist-block {
    background-color: white;
  }

  .fas.action {
    color: white;
  }
</style>

<script>
  import PlaylistOverview from './PlaylistOverview';
  import { redirectToLoginIfNotLoggedIn } from '../../LoginCookies';

  export default {
    data() {
      return {
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
      'playlist-overview': PlaylistOverview,
    },
    methods: {
      filterPlaylists(allPlaylists) {
        for (let i = 0; i < allPlaylists.length; i += 1) {
          this.populatePlaylists(allPlaylists[i]);
        }
      },
      populatePlaylists(playlist) {
        try {
          if (playlist.owner.name === 'unclebob') {
            fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${playlist.id}`,
              {
                method: 'get'
              })
              .then(response => response.json())
              .then(response => this.playlists.push({
                id: response.id,
                name: response.name,
                tracks: playlist.tracks
              }));
          }
        } catch (error) {
          // Todo
        }
      },
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
        fetch('https://ubeat.herokuapp.com/unsecure/playlists',
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                name: document.getElementById('new-playlist-input')
                  .value
                  .toString(),
                owner: 'unclebob@ubeat.com'
              })
          })
          .then(response => response.json())
          .then(this.toggleCreateNewPlaylist())
          .then(response => this.playlists.push({
            id: response.id,
            name: response.name,
            tracks: []
          }));
      },
      deleteSelectedPlaylist() {
        for (let i = 0; i < this.selectedPlaylists.length; i += 1) {
          const playlistId = this.selectedPlaylists[i];
          fetch(`https://ubeat.herokuapp.com/unsecure/playlists/${playlistId}`,
            {
              method: 'delete',
            })
            .then(response => response.json());
          this.removePlaylistById(playlistId);
        }
        this.togglePlaylistSelection();
        this.selectedPlaylists = [];
      },
      removePlaylistById(playlistId) {
        for (let i = 0; i < this.playlists.length; i += 1) {
          const playlist = this.playlists[i];
          if (playlist.id === playlistId) {
            this.playlists.splice(i, 1);
            break;
          }
        }
      }
    },
    created() {
      redirectToLoginIfNotLoggedIn(this.$router, encodeURIComponent(this.$route.path));
      fetch('https://ubeat.herokuapp.com/unsecure/playlists/',
        {
          method: 'get'
        })
        .then(response => response.json())
        .then((response) => {
          this.filterPlaylists(response);
        });
    },
  };
</script>
